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
          <button type="button" class="default primary"></button>
        </mock:shadow-root>
      </aw-button>
    `);
  });

  it('outline mode', async () => {
    const page = await newSpecPage({
      components: [AwButton],
      html: `<aw-button mode="outline" status="danger"></aw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-button mode="outline" status="danger">
        <mock:shadow-root>
          <button type="button" class="outline danger"></button>
        </mock:shadow-root>
      </aw-button>
    `);
  });

  it('default mode', async () => {
    const withModeSpecified = await newSpecPage({
      components: [AwButton],
      html: `<aw-button mode="default" status="danger"></aw-button>`,
    });
    expect(withModeSpecified.root).toEqualHtml(`
      <aw-button mode="default" status="danger">
        <mock:shadow-root>
          <button type="button" class="default danger"></button>
        </mock:shadow-root>
      </aw-button>
    `);

    const withoutModeSpecified = await newSpecPage({
      components: [AwButton],
      html: `<aw-button status="danger"></aw-button>`,
    });
    expect(withoutModeSpecified.root).toEqualHtml(`
      <aw-button status="danger">
        <mock:shadow-root>
          <button type="button" class="default danger"></button>
        </mock:shadow-root>
      </aw-button>
    `);
  });

  describe('Disabled state', () => {
    it('Default mode', async () => {
      const withModeSpecified = await newSpecPage({
        components: [AwButton],
        html: `<aw-button mode="default" status="danger" disabled="true"></aw-button>`,
      });
      expect(withModeSpecified.root).toEqualHtml(`
        <aw-button mode="default" status="danger" disabled="true">
          <mock:shadow-root>
            <button type="button" class="default danger" disabled></button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('Outline mode', async () => {
      const withModeSpecified = await newSpecPage({
        components: [AwButton],
        html: `<aw-button mode="outline" status="danger" disabled="true"></aw-button>`,
      });
      expect(withModeSpecified.root).toEqualHtml(`
        <aw-button mode="outline" status="danger" disabled="true">
          <mock:shadow-root>
            <button type="button" class="outline danger" disabled></button>
          </mock:shadow-root>
        </aw-button>
      `);
    });


  });
});
