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
  @Prop({ reflect: true, mutable: true }) theme: AnywhereTheme = defaultTheme;

  @Prop({ mutable: true, reflect: true })
  mode = AwAvatarMode.rounded;

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
  @Prop({ mutable: true, reflect: false })
  width = '75';

  /**
   * Wrapper heigth in pixels
   */
  @Prop({ mutable: true, reflect: false })
  height = '75';

  handleContainerArea(dimension: string): string {
    const withSafeArea = parseInt(dimension) - BORDER_SAFE_AREA;
    return String(withSafeArea);
  }

  buildSafeArea(dimension: SafeArea, styled: boolean = this.styled): SafeArea {
    let sizes: SafeArea = {
      width: this.dimensionWithUnit(dimension.width),
      height: this.dimensionWithUnit(dimension.height),
    };

    if (!styled) return sizes;

    return {
      width: this.dimensionWithUnit(this.handleContainerArea(dimension.width)),
      height: this.dimensionWithUnit(
        this.handleContainerArea(dimension.height),
      ),
    };
  }

  dimensionWithUnit(size: string): string {
    return `${size}${DIMENSION_UNIT}`;
  }

  render() {
    const classList = {
      wrapper: true,
      [this.mode]: true,
      [`styled ${this.status}`]: this.styled,
    };

    const safeArea: SafeArea = this.buildSafeArea({
      width: this.width,
      height: this.height,
    });

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
              width: safeArea.width,
              height: safeArea.height,
            }}
          >
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}

interface SafeArea {
  width: string;
  height: string;
}
