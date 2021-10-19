import { Component, Host, h, Prop } from '@stencil/core'
import { AwChipColor, AwChipMode, AwChipSize } from './aw-chip.model'

@Component({
  tag: 'aw-chip',
  styleUrl: 'aw-chip.scss',
  shadow: true,
})
export class AwChip {
  /**
   * Indicates if chip should be closed.
   */
  @Prop({ mutable: true })
  dimissable = false

  /**
   * The style of chip, like solid or outline.
   */
  @Prop({ mutable: true })
  color: AwChipColor = AwChipColor.solid

  /**
   * The style of corners, like rounded, square or radius.
   */
  @Prop({ mutable: true })
  mode: AwChipMode = AwChipMode.rounded

  /**
   * The size of chip.
   */
  @Prop({ mutable: true })
  size: AwChipSize = AwChipSize.large

  @Prop({ mutable: true })
  avatar = false

  showAvatar(): boolean {
    return this.avatar
  }

  render() {
    return (
      <Host>
        <div id="wrapper">
          <div id="avatar">
            <slot name="avatar"></slot>
          </div>

          <div id="label"></div>
        </div>
        <slot></slot>
      </Host>
    )
  }
}
