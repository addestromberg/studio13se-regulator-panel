[![CI](https://github.com/addestromberg/studio13se-regulator-panel/actions/workflows/ci.yml/badge.svg)](https://github.com/addestromberg/studio13se-regulator-panel/actions/workflows/ci.yml)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Faddestromberg%2Fstudio13se-regulator-panel%2Fmain%2Fpackage.json&query=%24.version&prefix=v&logo=grafana&label=Version)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Faddestromberg%2Fstudio13se-regulator-panel%2Fmain%2Fpackage.json&query=%24.license&logo=grafana&label=License)

[![Catalog](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=catalog&prefix=v&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22adde1-regulator-panel%22%29%5D.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/adde1-regulator-panel>)
[![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22adde1-regulator-panel%22%29%5D.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/adde1-regulator-panel)

<!-- This README file is going to be the one displayed on the Grafana.com website for your plugin. Uncomment and replace the content here before publishing.

Remove any remaining comments before publishing as these may be displayed on Grafana.com -->

# Regulator

A simple visualisation for regulators heavily inspired by dcs/scada software used in processing industries.

<!-- To help maximize the impact of your README and improve usability for users, we propose the following loose structure:

**BEFORE YOU BEGIN**
- Ensure all links are absolute URLs so that they will work when the README is displayed within Grafana and Grafana.com
- Be inspired ✨
  - [grafana-polystat-panel](https://github.com/grafana/grafana-polystat-panel)
  - [volkovlabs-variable-panel](https://github.com/volkovlabs/volkovlabs-variable-panel)

**ADD SOME BADGES**

Badges convey useful information at a glance for users whether in the Catalog or viewing the source code. You can use the generator on [Shields.io](https://shields.io/badges/dynamic-json-badge) together with the Grafana.com API
to create dynamic badges that update automatically when you publish a new version to the marketplace.

- For the logo field use 'grafana'.
- Examples (label: query)
  - Downloads: $.downloads
  - Catalog Version: $.version
  - Grafana Dependency: $.grafanaDependency
  - Signature Type: $.versionSignatureType

Full example: ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?logo=grafana&query=$.version&url=https://grafana.com/api/plugins/grafana-polystat-panel&label=Marketplace&prefix=v&color=F47A20)

Consider other [badges](https://shields.io/badges) as you feel appropriate for your project.
-->
## Overview / Introduction
Useful for PID trimming and quick overview of regulators.
<!--
Consider including screenshots:
- in [plugin.json](https://grafana.com/developers/plugin-tools/reference-plugin-json#info) include them as relative links.
- in the README ensure they are absolute URLs.

## Requirements
List any requirements or dependencies they may need to run the plugin.
-->
## Getting Started
Just pick your setpoint, process value and your output signal. As simple as that.
If you get your regulator timeseries from several queries you need to concatenate fields to a single dataframe.
<!--
## Documentation
If your project has dedicated documentation available for users, provide links here. For help in following Grafana's style recommendations for technical documentation, refer to our [Writer's Toolkit](https://grafana.com/docs/writers-toolkit/).
-->
## Contributing
Something not right for you? Feel free to fork or contribute, pull requests are welcome.
