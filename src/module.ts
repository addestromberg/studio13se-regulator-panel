import { PanelPlugin } from '@grafana/data';
import { RegulatorOptions } from './types';
import { RegulatorPanel } from './components/RegulatorPanel';

export const plugin = new PanelPlugin<RegulatorOptions>(RegulatorPanel).setPanelOptions((builder) => {
  return builder
    .addFieldNamePicker({
      path: 'timeField',
      name: 'Time Field',
    })
    .addFieldNamePicker({
      path: 'spField',
      name: 'Setpoint Field',
    })
    .addFieldNamePicker({
      path: 'pvField',
      name: 'Process Variable Field',
    })
    .addFieldNamePicker({
      path: 'outField',
      name: 'Output Field',
    })
    .addColorPicker({
      path: 'spColor',
      name: 'Setpoint color',
      defaultValue: 'cyan',
    })
    .addColorPicker({
      path: 'pvColor',
      name: 'Process Variable color',
      defaultValue: 'green',
    })
    .addColorPicker({
      path: 'outColor',
      name: 'Output color',
      defaultValue: 'purple',
    })
});
