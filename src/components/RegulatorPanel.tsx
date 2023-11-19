import React, { useRef, useEffect } from 'react';
import { DataFrameView, PanelProps } from '@grafana/data';
import { RegulatorOptions } from 'types';

import $ from 'jquery';

interface Props extends PanelProps<RegulatorOptions> { }

export const RegulatorPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const ref = useRef(null);

  const frame = data.series[0];

  const view = new DataFrameView(frame);

  const sp: any[][] = [];
  const pv: any[][] = [];
  const out: any[][] = [];
  view.forEach((row) => {
    // console.log(
    //   row[options.timeField] !== undefined ? row[options.timeField] : 0,
    //   row[options.spField] !== undefined ? row[options.spField] : 0,
    //   row[options.pvField] !== undefined ? row[options.pvField] : 0, 
    //   row[options.outField] !== undefined ? row[options.outField] : 0
    // )
    if (options.spField !== undefined) {
      sp.push([row[options.timeField], row[options.spField]]);
    }
    if (options.pvField !== undefined) {
      pv.push([row[options.timeField], row[options.pvField]]);
    }
    if (options.outField !== undefined) {
      out.push([row[options.timeField], row[options.outField]]);
    }
  });

  useEffect(() => {
    const canvas = ref.current;
    const plot = [
      { label: "SP", data: sp },
      { label: "PV", data: pv },
      { label: "OUT", data: out }
    ];

    const opts = {
      series: {
        lines: {
          lineWidth: 1
        }
      },
      xaxis: {
        mode: "time",
        timeformat: "%H:%M",
        minTickSize: [15, "minute"]
      },
      yaxes: [{}, { position: "right", min: 0, max: 100 }],

      legend: {
        show: false,
        noColumns: 1,
        position: "ne",
        margin: [-25, 25],
        backgroundColor: null,
        backgroundOpacity: 0,
      },

      grid: {
        hoverable: true,
        show: true,
        color: "lightgrey",
        borderWidth: 0,
        margin: {
          top: 25,
          left: 25,
          bottom: 0,
          right: 0,
        },
      },
      colors: [options.spColor, options.pvColor, options.outColor],
    };


    //const colors = {colors: [options.spColor, options.pvColor, options.outColor]};

    ($ as any).plot(
      canvas,
      plot,
      opts,

    );
  });



  const trend = <div ref={ref} style={{
    width: width,
    height: height * 0.66,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    margin: "auto"
  }} />;

  const spBlock = <div style={{
    width: width,
    height: height * 0.1,
    margin: "auto",
    marginTop: 3,
    padding: 2,
    paddingLeft: width *0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }} >
    <table>
      <tr>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.spColor, width: width*0.5 }}>SP</td>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.spColor, }}>
          {sp.length > 0 ? sp[sp.length - 1][1].toFixed(options.spDecimals) + options.spUnit : "N/A"}
        </td>
      </tr>
    </table>
  </div>;

  const pvBlock = <div style={{
    width: width,
    height: height * 0.1,
    margin: "auto",
    marginTop: 3,
    padding: 2,
    paddingLeft: width *0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    verticalAlign: "middle"
  }}>
    <table style={{padding: 10}}>
      <tr>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.pvColor, width: width*0.5}}>PV</td>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.pvColor }}>
          {pv.length > 0 ? pv[pv.length - 1][1].toFixed(options.spDecimals) + options.spUnit : "N/A"}
        </td>
      </tr>
    </table>
  </div>;

  const outBlock = <div style={{
    width: width,
    height: height * 0.1,
    margin: "auto",
    marginTop: 3,
    padding: 2,
    paddingLeft: width *0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }} >
    <table>
      <tr>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.outColor, width: width*0.5 }}>OUT</td>
        <td style={{ fontSize: 16, fontWeight: 300, color: options.outColor }}>
          {out.length > 0 ? out[out.length - 1][1].toFixed(options.outDecimals) + options.outUnit : "N/A"}
        </td>
      </tr>
    </table>
  </div>;

  // Return the jsx template here
  return (
    <div style={{}}>
      {trend}
      {spBlock}
      {pvBlock}
      {outBlock}
    </div>
  );
};
