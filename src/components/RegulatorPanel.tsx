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

    const plot = [sp, pv, out];
    
    const opts = {
      xaxis: {
        mode: "time",
        timeformat: "%H:%M",
        minTickSize: [15, "minute"]
      },
      
      grid: {
        show: true,
        color: "lightgrey",
        borderWidth: 0,
        margin: 5
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

  const trend = <div ref={ref} style={{ width: width, height: width/1.2 }} />;
  
  return trend;
};
