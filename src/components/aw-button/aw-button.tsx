import { Component, h, Host, Prop } from '@stencil/core';
import { AwButtonStatus, AwButtonMode } from './aw-button.model';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.scss',
  shadow: true,
})
export class AwButton {
  /**
   * Optional ID to be attached on button
   */
  @Prop()
  identifier: string;

  /**
   * Text to show inside button
   */
  @Prop()
  label: string;

  /**
   * The status of button (color)
   */
  @Prop()
  status: AwButtonStatus = AwButtonStatus.primary;

  /**
   * Mode of button (style)
   */
  @Prop()
  mode: AwButtonMode = AwButtonMode.default;

  render() {
    const classList = {
      [this.mode]: true,
      [this.status]: true,
    };

    return (
      <Host>
        <button type="button" id={this.identifier} class={classList}>
          {this.label}
        </button>
      </Host>
    );
  }
}
