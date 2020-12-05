import { Component, Host, h, Prop } from '@stencil/core';
import { AwChipMode } from './aw-avatar.model';

@Component({
  tag: 'aw-avatar',
  styleUrl: 'aw-avatar.scss',
  shadow: true,
})
export class AwAvatar {
  @Prop({ mutable: false })
  mode = AwChipMode.rounded;

  @Prop({ reflect: true, mutable: true })
  src!: string;

  render() {
    return (
      <Host>
        <img src={this.src} />
      </Host>
    );
  }
}
