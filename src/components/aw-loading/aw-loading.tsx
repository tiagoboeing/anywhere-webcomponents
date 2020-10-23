import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'aw-loading',
  styleUrl: 'aw-loading.scss',
  shadow: true,
})
export class AwLoading {
  @Element() element: HTMLElement;

  private height = 'auto';

  componentDidLoad() {
    this.height = `${this.element.offsetHeight}`;
  }

  render() {
    return (
      <Host>
        <slot />
        <div class="loading-wrapper">
          <div class="loading">
            <div />
          </div>
        </div>
      </Host>
    );
  }
}
