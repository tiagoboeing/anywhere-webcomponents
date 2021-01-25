import { Component, Host, h, Prop } from '@stencil/core';
import { defaultTheme } from '../../defaultTheme';
import { AwStatus } from '../../models/status.model';
import { AnywhereTheme } from '../interfaces';
import { AwAvatarMode } from './aw-avatar.model';

const BORDER_SAFE_AREA = 8;
const DIMENSION_UNIT = 'px';

@Component({
  tag: 'aw-avatar',
  styleUrl: 'aw-avatar.scss',
  shadow: true,
})
export class AwAvatar {
  @Prop({ mutable: false })
  mode = AwAvatarMode.rounded;

  @Prop({ reflect: true }) theme: AnywhereTheme = defaultTheme;

  @Prop({ reflect: true, mutable: true })
  status: AwStatus = AwStatus.primary;

  /**
   * Add a styled border to component
   */
  @Prop({ reflect: true, mutable: true })
  styled: boolean = true;

  /**
   * Wrapper width in pixels
   */
  @Prop({ mutable: true, reflect: true })
  width: string;

  /**
   * Wrapper heigth in pixels
   */
  @Prop({ mutable: true, reflect: true })
  height: string;

  @Prop({ mutable: false, reflect: true })
  overflow: boolean = true;

  handleContainerArea(dimension: string): string {
    const withSafeArea = parseInt(dimension) - BORDER_SAFE_AREA;
    return String(withSafeArea);
  }

  buildSafeArea(dimension: string, styled: boolean = this.styled): string {
    const size = styled ? this.handleContainerArea(this.width) : dimension;
    return `${size}${DIMENSION_UNIT}`;
  }

  render() {
    const classList = {
      wrapper: true,
      [`styled ${this.status}`]: this.styled,
    };

    return (
      <Host
        style={{
          width: `${this.width}px`,
          height: `${this.height}px`,
        }}
      >
        <div class={classList}>
          <div
            class="container"
            style={{
              width: this.buildSafeArea(this.width),
              height: this.buildSafeArea(this.height),
            }}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
