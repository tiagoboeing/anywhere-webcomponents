import { Component, Host, h, Element, Prop } from '@stencil/core';
import { AwStatus } from '../../models/status.model';

@Component({
  tag: 'aw-loading',
  styleUrl: 'aw-loading.scss',
  shadow: true,
})
export class AwLoading {
  @Element() element: HTMLElement;

  @Prop({ mutable: true })
  visible = false;

  @Prop({ mutable: true, reflect: true })
  status = AwStatus.primary;

  componentDidRender() {}

  render() {
    const classList = {
      [this.status]: true,
    };

    return this.visible ? (
      <Host>
        <span class="wrapper" style={{ position: 'relative' }}>
          <slot />
          <div class="loading-wrapper">
            <div class="loading">
              <div class={classList}></div>
            </div>
          </div>
        </span>
      </Host>
    ) : (
      <slot />
    );
  }
}
