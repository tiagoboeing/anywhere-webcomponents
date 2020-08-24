import { Component, h, Host, Prop } from '@stencil/core';
import { AwButtonStatus } from './aw-button.model';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.css',
  shadow: true,
})
export class AwButton {
  /**
   * Optional ID to be attached on button
   */
  @Prop() identifier: string;

  /**
   * Text to show inside button
   */
  @Prop() label: string;

  /**
   * The status of button (color)
   */
  @Prop() status: AwButtonStatus = AwButtonStatus.primary;

  render() {
    return (
      <Host>
        <button type="button" id={this.identifier} class={this.status}>
          {this.label}
        </button>
      </Host>
    );
  }
}
