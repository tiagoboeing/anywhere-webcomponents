import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'aw-loading',
  styleUrl: 'aw-loading.scss',
  shadow: true,
})
export class AwLoading {
  @Element() element: HTMLElement;

  // private height = 'auto';

  componentDidLoad() {
    // this.height = `${this.element.offsetHeight}`;

    // console.log(this.height);

    // console.log(this.element.getElementsByTagName('slot'));
  }

  render() {
    return (
      <Host>
        <div class="loading-wrapper">
          <div class="loading">
            <div>
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
