import { newSpecPage } from '@stencil/core/testing'
import { AwChip } from '../aw-chip'

describe('aw-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwChip],
      html: `<aw-chip></aw-chip>`,
    })
    expect(page.root).toEqualHtml(`
      <aw-chip>
        <mock:shadow-root>
          <div id="wrapper">
           <div id="avatar">
             <slot name="avatar"></slot>
           </div>

           <div id="label"></div>
         </div>

          <slot></slot>
        </mock:shadow-root>
      </aw-chip>
    `)
  })
})
