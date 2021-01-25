import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { defaultTheme } from '../../defaultTheme';
import { AwStatus } from '../../models/status.model';
import { AnywhereTheme } from '../interfaces';
import {
  AwButtonColor,
  AwButtonIconMode,
  AwButtonMode,
  AwButtonSize,
} from './aw-button.model';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.scss',
  shadow: true,
})
export class AwButton {
  @Element() element: HTMLElement;

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
  @Prop({ mutable: false, reflect: true })
  identifier: string;

  @Prop({ reflect: true }) theme: AnywhereTheme = defaultTheme;

  /**
   * Text to show inside button
   */
  @Prop({ mutable: true })
  label!: string;

  /**
   * The status of button (color)
   */
  @Prop({ mutable: true })
  status: AwStatus = AwStatus.primary;

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

  @Prop({ mutable: true, reflect: true })
  loading = false;

  componentDidLoad() {
    if (this.onlyIcon && !this.icon) {
      throw new Error(
        `When 'onlyIcon' property is enabled a 'icon' should be passed!`,
      );
    }
  }

  handleEventClick = (event: MouseEvent): void => {
    if (!this.isDisabled) this.clicked.emit(event);
  };

  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  render() {
    const classList = {
      [this.color]: true,
      [this.mode]: true,
      [this.status]: true,
      disabled: this.isDisabled,
      responsive: this.fullWidth,
    };

    const iconClasses = {
      'reverse': !!this.icon && this.iconMode === AwButtonIconMode.right,
      'no-margins': this.onlyIcon,
    };

    return (
      <Host>
        <aw-loading status={this.status} visible={this.loading}>
          <button
            type="button"
            id={this.identifier}
            class={classList}
            disabled={this.isDisabled}
            onClick={this.handleEventClick}
          >
            <span class={iconClasses}>
              {!!this.icon && <i class={this.icon}></i>}
              {!this.onlyIcon && this.label}
            </span>
          </button>
        </aw-loading>
      </Host>
    );
  }
}
