import { PanelPlugin } from '@grafana/data';
import { RegulatorOptions } from './types';
import { RegulatorPanel } from './components/RegulatorPanel';

export const plugin = new PanelPlugin<RegulatorOptions>(RegulatorPanel).setPanelOptions((builder) => {
  return builder
    .addColorPicker({
      path: 'backgroundTint',
      name: 'Background Tint',
      defaultValue: '#00000033',
    })
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
      path: "spDecimals",
      name: "SP/PV Decimals",
      defaultValue: 2
    })
    .addColorPicker({
      path: 'spColor',
      name: 'Setpoint color',
      defaultValue: '#00ddffcc',
    })
    .addFieldNamePicker({
      path: 'spField',
      name: 'Setpoint Field',
    })
    .addColorPicker({
      path: 'pvColor',
      name: 'Process Variable color',
      defaultValue: '#1eff00cc',
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
      path: "outDecimals",
      name: "Output Decimals",
      defaultValue: 2
    })
    .addColorPicker({
      path: 'outColor',
      name: 'Output color',
      defaultValue: '#ff00ffcc',
    })
    .addFieldNamePicker({
      path: 'outField',
      name: 'Output Field',
    })


});
