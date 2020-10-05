import { newSpecPage } from '@stencil/core/testing';
import { AwButton } from '../aw-button';

describe('aw-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwButton],
      html: `<aw-button></aw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-button theme="light">
        <mock:shadow-root>
          <button type="button" class="primary rounded solid">
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
        <aw-button theme="light">
          <mock:shadow-root>
            <button type="button" class="rounded primary solid">
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
        <aw-button mode="radius" theme="light">
          <mock:shadow-root>
            <button type="button" class="radius primary solid">
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
        <aw-button mode="square" theme="light">
          <mock:shadow-root>
            <button type="button" class="square primary solid">
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
        <aw-button theme="light">
          <mock:shadow-root>
            <button type="button" class="solid primary rounded">
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
        <aw-button color="outline" theme="light">
          <mock:shadow-root>
            <button type="button" class="outline primary rounded">
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
        <aw-button color="gradient" theme="light">
          <mock:shadow-root>
            <button type="button" class="gradient primary rounded">
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
        <aw-button color="basic" theme="light">
          <mock:shadow-root>
            <button type="button" class="basic primary rounded">
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
        <aw-button
          status="danger"
          disabled="true"
          theme="light"
        >
          <mock:shadow-root>
            <button type="button" class="solid rounded danger disabled" disabled>
              <span></span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });
  });

  describe('Icon', () => {
    it('When "onlyIcon" property is true a "icon" should be passed', async () => {
      await expect(
        newSpecPage({
          components: [AwButton],
          html: `<aw-button status="danger" onlyIcon="true"></aw-button>`,
        }),
      ).rejects.toThrow(new Error(`When 'onlyIcon' property is enabled a 'icon' should be passed!`));
    });

    it('Icon defined and onlyIcon true', async () => {
      const comp = await newSpecPage({
        components: [AwButton],
        html: `
        <aw-button
          status="danger"
          icon="far fa-airplane"
          onlyIcon="true">
        </aw-button>`,
      });

      expect(comp.root).toEqualHtml(`
        <aw-button
          status="danger"
          onlyIcon="true"
          icon="far fa-airplane"
          theme="light"
        >
          <mock:shadow-root>
            <button type="button" class="solid rounded danger">
              <span class="no-margins">
                <i class="fa-airplane far"></i>
              </span>
            </button>
          </mock:shadow-root>
        </aw-button>
      `);
    });

    describe('iconMode with label', () => {
      it('Left', async () => {
        const compWithoutIconMode = await newSpecPage({
          components: [AwButton],
          html: `
          <aw-button
            status="danger"
            icon="far fa-airplane"
            label="My button"
            theme="light"
          >
          </aw-button>`,
        });
        const compWithIconMode = await newSpecPage({
          components: [AwButton],
          html: `
          <aw-button
            status="danger"
            icon="far fa-airplane"
            iconMode="left"
            label="My button"
            theme="light">
          </aw-button>`,
        });

        const resultHtml = `
          <aw-button
            status="danger"
            icon="far fa-airplane"
            iconMode="left"
            label="My button"
            theme="light"
          >
            <mock:shadow-root>
              <button type="button" class="solid rounded danger">
                <span>
                  <i class="far fa-airplane"></i>
                  My button
                </span>
              </button>
            </mock:shadow-root>
          </aw-button>
        `;

        expect(compWithoutIconMode.root).toEqualHtml(resultHtml);
        expect(compWithIconMode.root).toEqualHtml(resultHtml);
      });

      it('Right', async () => {
        const comp = await newSpecPage({
          components: [AwButton],
          html: `
            <aw-button
              status="danger"
              icon="far fa-airplane"
              iconMode="right"
              label="My button"
              theme="light">
            </aw-button>
          `,
        });

        const resultHtml = `
          <aw-button
            status="danger"
            icon="far fa-airplane"
            iconMode="right"
            label="My button"
            theme="light"
          >
            <mock:shadow-root>
              <button type="button" class="solid rounded danger">
                <span class="reverse">
                  <i class="far fa-airplane"></i>
                  My button
                </span>
              </button>
            </mock:shadow-root>
        </aw-button>
        `;

        expect(comp.root).toEqualHtml(resultHtml);
      });
    });

    describe('Click event', () => {
      it('Passing click function', async () => {
        const mockCallback = jest.fn();

        const comp = await newSpecPage({
          components: [AwButton],
          html: `
            <aw-button status="danger"
              clicked={${mockCallback}}
              label="My button"
              theme="light"
            >
            </aw-button>
          `,
        });
        expect(comp.root).toEqualHtml(`
          <aw-button
            status="danger"
            label="My button"
            clicked={${mockCallback}}
            theme="light"
          >
            <mock:shadow-root>
              <button type="button" class="solid rounded danger">
                <span>
                  My button
                </span>
              </button>
            </mock:shadow-root>
        </aw-button>
        `);
      });

      it('Single click', async () => {
        const mock = jest.fn();
        const comp = await newSpecPage({
          components: [AwButton],
          html: `
            <aw-button status="danger" label="My button"></aw-button>
          `,
        });

        comp.doc.addEventListener('clicked', mock());
        comp.root.click();

        await comp.waitForChanges();

        expect(mock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
