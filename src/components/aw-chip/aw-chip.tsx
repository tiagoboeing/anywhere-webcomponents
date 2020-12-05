import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'aw-chip',
  styleUrl: 'aw-chip.scss',
  shadow: true,
})
export class AwChip {

  render() {
    return (
      <Host>
        <div id="wrapper">
          <div id="avatar"></div>
          <div id="label"></div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
