import { newSpecPage } from '@stencil/core/testing';
import { AwLoading } from '../aw-loading';

describe('aw-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwLoading],
      html: `<aw-loading></aw-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-loading status="primary">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </aw-loading>
    `);
  });
});
