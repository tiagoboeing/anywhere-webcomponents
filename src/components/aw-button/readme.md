# aw-button

A simple button with styles of Anywhere Design System applied.

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute   | Description                               | Type                                                                                                                                                  | Default                  |
| -------------------- | ----------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `color`              | `color`     | Colors of button (like gradient)          | `AwButtonColor.basic \| AwButtonColor.gradient \| AwButtonColor.outline \| AwButtonColor.solid`                                                       | `AwButtonColor.solid`    |
| `disabled`           | `disabled`  | Boolean to indicate if button is disabled | `boolean`                                                                                                                                             | `false`                  |
| `fullWidth`          | `fullwidth` | If `true` button use `width: 100%`        | `boolean`                                                                                                                                             | `false`                  |
| `icon`               | `icon`      |                                           | `string`                                                                                                                                              | `undefined`              |
| `iconMode`           | `iconmode`  | Position of icon                          | `AwButtonIconMode.left \| AwButtonIconMode.rigth`                                                                                                     | `AwButtonIconMode.left`  |
| `id`                 | `id`        | Optional ID to be attached on button      | `string`                                                                                                                                              | `undefined`              |
| `label` _(required)_ | `label`     | Text to show inside button                | `string`                                                                                                                                              | `undefined`              |
| `mode`               | `mode`      | Mode of button (like square or rounded)   | `AwButtonMode.radius \| AwButtonMode.rounded \| AwButtonMode.square`                                                                                  | `AwButtonMode.rounded`   |
| `onlyIcon`           | `onlyicon`  | If `true` button removes label            | `boolean`                                                                                                                                             | `false`                  |
| `size`               | `size`      | Size of button                            | `AwButtonSize.giant \| AwButtonSize.large \| AwButtonSize.medium \| AwButtonSize.small \| AwButtonSize.tiny`                                          | `AwButtonSize.large`     |
| `status`             | `status`    | The status of button (color)              | `AwButtonStatus.danger \| AwButtonStatus.info \| AwButtonStatus.primary \| AwButtonStatus.secondary \| AwButtonStatus.success \| AwButtonStatus.warn` | `AwButtonStatus.primary` |


## Events

| Event     | Description                                                  | Type                      |
| --------- | ------------------------------------------------------------ | ------------------------- |
| `clicked` | Emitted when button is clicked Captured by on-click listener | `CustomEvent<MouseEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
