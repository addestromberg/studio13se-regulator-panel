import { PanelPlugin } from '@grafana/data';
import { RegulatorOptions } from './types';
import { RegulatorPanel } from './components/RegulatorPanel';

export const plugin = new PanelPlugin<RegulatorOptions>(RegulatorPanel).setPanelOptions((builder) => {
  return builder
    .addFieldNamePicker({
      path: 'timeField',
      name: 'Time Field',
    })
    .addTextInput({
      path: 'spUnit',
      name: "SP/PV unit",
      defaultValue: "°C"
    })
    .addNumberInput({
      path: "spDecimal",
      name: "SP/PV Decimals",
      defaultValue: 2
    })
    .addColorPicker({
      path: 'spColor',
      name: 'Setpoint color',
      defaultValue: 'cyan',
    })
    .addFieldNamePicker({
      path: 'spField',
      name: 'Setpoint Field',
    })
    .addColorPicker({
      path: 'pvColor',
      name: 'Process Variable color',
      defaultValue: 'green',
    })
    .addFieldNamePicker({
      path: 'pvField',
      name: 'Process Variable Field',
    })
    .addTextInput({
      path: 'outUnit',
      name: "Output unit",
      defaultValue: "%"
    })
    .addNumberInput({
      path: "spDecimal",
      name: "Output Decimals",
      defaultValue: 2
    })
    .addColorPicker({
      path: 'outColor',
      name: 'Output color',
      defaultValue: 'purple',
    })
    .addFieldNamePicker({
      path: 'outField',
      name: 'Output Field',
    })


});
