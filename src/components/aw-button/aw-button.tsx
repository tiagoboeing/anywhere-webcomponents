import { Component, h, Host, Prop, EventEmitter, Event } from '@stencil/core';
import { AwButtonColor, AwButtonIconMode, AwButtonMode, AwButtonSize, AwButtonStatus } from './aw-button.model';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.scss',
  shadow: true,
  assetsDirs: ['assets/fontawesome'],
})
export class AwButton {
  /**
   * Emitted when button is clicked
   * Captured by onClick listener.
   * > Note: if button was disabled event can't be dispatch
   */
  @Event({
    bubbles: true,
    composed: true,
  })
  clicked: EventEmitter<UIEvent>;
  /**
   * Optional ID to be attached on button
   */
  @Prop({ attribute: 'id', mutable: false, reflect: true })
  id: string;

  /**
   * Text to show inside button
   */
  @Prop({ mutable: true })
  label!: string;

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

  /**
   * If `true` button removes label
   */
  @Prop({ attribute: 'onlyIcon' })
  onlyIcon = false;

  /**
   * Position of icon
   */
  @Prop({ attribute: 'iconMode' })
  iconMode: AwButtonIconMode = AwButtonIconMode.left;

  /**
   * Icon class from FontAwesome 5 Free
   * Allows to use: brands, regular, solid
   * Example: 'far fa-paper-plane'
   */
  @Prop()
  icon: string;

  /**
   * Add a loading indicator to button
   * You need add a manual control to remove loading
   */
  @Prop({ mutable: true })
  loading = false;

  componentDidLoad() {
    if (this.onlyIcon && !this.icon) {
      throw new Error(`When 'onlyIcon' property is enabled a 'icon' should be passed!`);
    }
  }

  render() {
    const classList = {
      [this.size]: true,
      [this.color]: true,
      [this.mode]: true,
      [this.status]: true,
      disabled: this.disabled,
      responsive: this.fullWidth,
    };

    const iconClasses = {
      'reverse': !!this.icon && this.iconMode === AwButtonIconMode.rigth,
      'no-margins': this.onlyIcon,
    };

    return (
      <Host>
        <button
          type="button"
          id={this.id}
          class={classList}
          disabled={this.disabled}
          onClick={(e: UIEvent) => this.clicked.emit(e)}
        >
          <span class={iconClasses}>
            {!!this.icon && <i class={this.icon}></i>}
            {!this.onlyIcon && this.label}
          </span>
        </button>
      </Host>
    );
  }
}
