import { newE2EPage } from '@stencil/core/testing';
import { AwButton } from '../aw-button';

describe('aw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-button></aw-button>');

    const element = await page.find('aw-button');
    expect(element).toHaveClass('hydrated');
  });

  it('class by status', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-button label="Danger" id="my-button" status="danger"></aw-button>');

    const element = await page.find('aw-button');
    const button = element.shadowRoot.childNodes[0];

    expect(button).toHaveClasses(['danger', 'default']);
  });

  it('outline mode', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <aw-button label="New button"
        id="my-button"
        status="danger"
        mode="outline">
      </aw-button>
    `);

    const element = await page.find('aw-button');
    const button = element.shadowRoot.childNodes[0];

    expect(button).toHaveClasses(['danger', 'outline']);
  });
});
