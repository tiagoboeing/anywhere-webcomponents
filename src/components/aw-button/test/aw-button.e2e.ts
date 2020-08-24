import { newE2EPage } from '@stencil/core/testing';

describe('aw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-button></aw-button>');

    const element = await page.find('aw-button');
    expect(element).toHaveClass('hydrated');
  });
});
