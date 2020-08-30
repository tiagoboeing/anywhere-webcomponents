import { Component, h, Host, Prop } from '@stencil/core';
import { AwButtonStatus, AwButtonMode, AwButtonColor, AwButtonSize } from './aw-button.model';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.scss',
  shadow: true,
})
export class AwButton {
  /**
   * Optional ID to be attached on button
   */
  @Prop({ attribute: 'id', mutable: false, reflect: true })
  id: string;

  /**
   * Text to show inside button
   */
  @Prop({ mutable: true })
  label: string;

  /**
   * The status of button (color)
   */
  @Prop({ mutable: true })
  status: AwButtonStatus = AwButtonStatus.primary;

  /**
   * Mode of button (like square or rounded)
   */
  @Prop({ mutable: true })
  mode: AwButtonMode = AwButtonMode.rounded;

  /**
   * Colors of button (like gradient)
   */
  @Prop({ mutable: true })
  color: AwButtonColor = AwButtonColor.solid;

  /**
   * Size of button
   */
  @Prop({ mutable: true })
  size: AwButtonSize = AwButtonSize.large;

  /**
   * Boolean to indicate if button is disabled
   */
  @Prop({ attribute: 'disabled', mutable: true })
  disabled: boolean = false;

  /**
   * If `true` button use `width: 100%`
   */
  @Prop({ attribute: 'fullWidth' })
  fullWidth = false;

  // TODO: implement
  @Prop()
  onlyIcon = false;

  render() {
    const classList = {
      [this.size]: true,
      [this.color]: true,
      [this.mode]: true,
      [this.status]: true,
      disabled: this.disabled,
      responsive: this.fullWidth,
    };

    return (
      <Host>
        <button type="button" id={this.id} class={classList} disabled={this.disabled}>
          {this.label}
        </button>
      </Host>
    );
  }
}
