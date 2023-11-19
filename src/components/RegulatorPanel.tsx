import React, { useRef, useEffect } from 'react';
import { DataFrameView, PanelProps } from '@grafana/data';
import { RegulatorOptions } from 'types';

import $ from 'jquery';

interface Props extends PanelProps<RegulatorOptions> { }

export const RegulatorPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;

    const frame = data.series[0];
    
    const view = new DataFrameView(frame);

    const sp: any[][]  = [];
    const pv: any[][]  = [];
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

    const plot = [
      {label: "SP", data: sp}, 
      {label: "PV", data: pv},
      {label: "OUT", data: out}
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
      yaxes: [ { }, { position: "right", min: 0, max: 100 } ],
      
      legend: {
        show: false,
        noColumns: 1,
        position: "ne",
        margin: [-25,25],
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

  

  const trend = <div ref={ref} style={{ width: width/1, height: width/1.75, borderRadius: 5, padding: 10 ,backgroundColor: "black", margin: "auto" }} />;
  const spBlock = <div style={{width: width/1, height: width/10, margin: "auto", backgroundColor: options.spColor }}></div>;
  const pvBlock = <div style={{width: width/1, height: width/10, margin: "auto", backgroundColor: options.pvColor }}></div>;
  const outBlock = <div style={{width: width/1, height: width/10, margin: "auto", backgroundColor: options.outColor }}></div>;

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
