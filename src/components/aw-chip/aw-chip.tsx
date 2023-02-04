import {
  Component,
  ComponentWillLoad,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core'
import { AwAvatarMode } from '../aw-avatar/aw-avatar.model'
import {
  AwChipAvatarSizes,
  AwChipColor,
  AwChipMode,
  AwChipSize,
} from './aw-chip.model'

@Component({
  tag: 'aw-chip',
  styleUrl: 'aw-chip.scss',
  shadow: true,
})
export class AwChip implements ComponentWillLoad {
  @Element() host: HTMLDivElement

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

  @Prop({ mutable: true })
  label: string

  componentWillLoad() {
    this.validate()
    this.buildAvatar()
  }

  validate() {
    if (!this.label) throw new Error('Property "label" is required!')
  }

  showAvatar(): boolean {
    const hasSlotAvatar = this.host.querySelector('[slot="avatar"]')

    return this.avatar || !!hasSlotAvatar
  }

  buildAvatar() {
    const avatarSlot = this.host.querySelector('[slot="avatar"]')

    if (!avatarSlot) return

    avatarSlot.setAttribute('width', AwChipAvatarSizes.width)
    avatarSlot.setAttribute('height', AwChipAvatarSizes.height)
    avatarSlot.setAttribute('styled', 'false')

    const avatarMode = this.handleAvatarMode(this.mode)
    avatarSlot.setAttribute('mode', avatarMode)
  }

  handleAvatarMode(chipMode: AwChipMode): AwAvatarMode {
    let avatarMode = AwAvatarMode.rounded

    if (chipMode === AwChipMode.square) avatarMode = AwAvatarMode.square
    if (chipMode === AwChipMode.radius) avatarMode = AwAvatarMode.radius

    return avatarMode
  }

  render() {
    return (
      <Host>
        <div id="wrapper">
          {this.showAvatar() && (
            <div id="avatar">
              <slot name="avatar"></slot>
            </div>
          )}

          <div id="label">{this.label}</div>
        </div>
      </Host>
    )
  }
}
