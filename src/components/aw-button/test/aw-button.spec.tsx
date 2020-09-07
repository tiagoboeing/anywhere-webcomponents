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
          <button type="button" class="large primary rounded solid">
            <span></span>
          </button>
        </mock:shadow-root>
      </aw-button>
    `);
  });

  describe('Different modes', () => {
    it('default (rounded)', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button>
          <mock:shadow-root>
            <button type="button" class="rounded large primary solid">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('radius', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button mode="radius"></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button mode="radius">
          <mock:shadow-root>
            <button type="button" class="radius large primary solid">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('square', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button mode="square"></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button mode="square">
          <mock:shadow-root>
            <button type="button" class="square large primary solid">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });
  });

  describe('Colors', () => {
    it('Default (solid)', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button>
          <mock:shadow-root>
            <button type="button" class="solid large primary rounded">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('outline', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button color="outline"></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button color="outline">
          <mock:shadow-root>
            <button type="button" class="outline large primary rounded">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('gradient', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button color="gradient"></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button color="gradient">
          <mock:shadow-root>
            <button type="button" class="gradient large primary rounded">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    it('basic', async () => {
      const page = await newSpecPage({
        components: [AwButton],
        html: `<aw-button color="basic"></aw-button>`,
      });
      expect(page.root).toEqualHtml(`
        <aw-button color="basic">
          <mock:shadow-root>
            <button type="button" class="basic large primary rounded">
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });
  });

  describe('Disabled state', () => {
    it('Default mode', async () => {
      const withModeSpecified = await newSpecPage({
        components: [AwButton],
        html: `<aw-button status="danger" disabled="true"></aw-button>`,
      });
      expect(withModeSpecified.root).toEqualHtml(`
        <aw-button status="danger" disabled="true">
          <mock:shadow-root>
            <button type="button" class="solid large rounded danger disabled" disabled>
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });
  });
});
