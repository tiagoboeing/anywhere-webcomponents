import { newSpecPage } from '@stencil/core/testing';
import { AwButton } from '../aw-button';

describe('aw-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwButton],
      html: `<aw-button></aw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-button>
        <mock:shadow-root>
          <button type="button" class="primary"></button>
        </mock:shadow-root>
      </aw-button>
    `);
  });
});
