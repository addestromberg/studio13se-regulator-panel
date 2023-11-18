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

    let table: any[] = [];
    view.forEach((row) => {
      table.push([row[0],row[1]]);
      // console.log(row[options.xField], row[options.yField], row[options.sizeField]);
    });
    console.log(table);  
    ($ as any).plot(
      canvas,
      [
        table, 
      ],
    );
  });

  return <div ref={ref} style={{ width: width, height: height }} />;
};
