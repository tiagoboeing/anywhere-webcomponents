import { newSpecPage } from '@stencil/core/testing';
import { AwAvatar } from '../aw-avatar';

describe('aw-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwAvatar],
      html: `<aw-avatar></aw-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-avatar>
    `);
  });
});
