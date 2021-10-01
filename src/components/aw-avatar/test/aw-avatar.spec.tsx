import { newSpecPage } from '@stencil/core/testing';
import { AwStatus } from '../../../models/status.model';
import { AwAvatar } from '../aw-avatar';
import { AwAvatarMode } from '../aw-avatar.model';

describe('aw-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwAvatar],
      html: `<aw-avatar></aw-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <aw-avatar mode="rounded" status="primary" styled theme="light" style="width: 75px; height: 75px;">
          <mock:shadow-root>
            <div class="primary rounded styled wrapper">
              <div class="container" style="width: 67px; height: 67px;">
                <slot></slot>
              </div>
            </div>
          </mock:shadow-root>
      </aw-avatar>
    `);
  });

  describe('Default values', () => {
    it('should keep the default values', () => {
      const avatar = new AwAvatar();

      expect(avatar.mode).toEqual(AwAvatarMode.rounded);
      expect(avatar.theme).toEqual('light');
      expect(avatar.status).toEqual(AwStatus.primary);
      expect(avatar.styled).toBeTruthy();
      expect(avatar.width).toEqual('75');
      expect(avatar.height).toEqual('75');
      expect(avatar.overflow).toBeTruthy();
    });
  });

  describe('Methods', () => {
    it('should correct calculate SafeAreas', () => {
      const avatar = new AwAvatar();

      const sizes = { width: '75', height: '75' };
      const sizesSafe = { width: '67px', height: '67px' };

      expect(avatar.buildSafeArea(sizes)).toEqual(sizesSafe);
      expect(avatar.buildSafeArea(sizes, true)).toEqual(sizesSafe);
      expect(avatar.buildSafeArea(sizes, false)).toEqual({
        width: '75px',
        height: '75px',
      });
    });

    it('should add "DIMENSION_UNIT" suffix for a specific size...', () => {
      const avatar = new AwAvatar();
      expect(avatar.dimensionWithUnit('250')).toEqual('250px');
    });
  });

  describe('By style', () => {
    it('default', async () => {
      const page = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar></aw-avatar>`,
      });

      expect(page.root).toEqualHtml(`
        <aw-avatar mode="rounded" status="primary" styled theme="light" style="width: 75px; height: 75px;">
            <mock:shadow-root>
              <div class="primary rounded styled wrapper">
                <div class="container" style="width: 67px; height: 67px;">
                  <slot></slot>
                </div>
              </div>
            </mock:shadow-root>
        </aw-avatar>
      `);
    });

    it('styled', async () => {
      const page = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled></aw-avatar>`,
      });

      expect(page.root).toEqualHtml(`
        <aw-avatar mode="rounded" status="primary" styled theme="light" style="width: 75px; height: 75px;">
            <mock:shadow-root>
              <div class="primary rounded styled wrapper">
                <div class="container" style="width: 67px; height: 67px;">
                  <slot></slot>
                </div>
              </div>
            </mock:shadow-root>
        </aw-avatar>
      `);
    });

    it('"styled="false"', async () => {
      const page = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled="false"></aw-avatar>`,
      });

      expect(page.root).toEqualHtml(`
        <aw-avatar mode="rounded" styled="false" status="primary" theme="light" style="width: 75px; height: 75px;">
            <mock:shadow-root>
              <div class="rounded wrapper">
                <div class="container" style="width: 75px; height: 75px;">
                  <slot></slot>
                </div>
              </div>
            </mock:shadow-root>
        </aw-avatar>
      `);
    });
  });

  describe('Status', () => {
    const templateByStatus = (status: string) => `
        <aw-avatar mode="rounded" status="${status}" styled theme="light" style="width: 75px; height: 75px;">
          <mock:shadow-root>
            <div class="${status} rounded styled wrapper">
              <div class="container" style="width: 67px; height: 67px;">
                <slot></slot>
              </div>
            </div>
          </mock:shadow-root>
          <img height="100%" src="https://picsum.photos/200" width="100%">
      </aw-avatar>
    `;

    it('primary', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="primary">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.primary));
    });

    it('secondary', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="secondary">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.secondary));
    });

    it('danger', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="danger">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.danger));
    });

    it('info', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="info">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.info));
    });

    it('success', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="success">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.success));
    });

    it('warn', async () => {
      const status = await newSpecPage({
        components: [AwAvatar],
        html: `<aw-avatar styled status="warn">
          <img src="https://picsum.photos/200" width="100%" height="100%"/>
        </aw-avatar>`,
      });

      expect(status.root).toEqualHtml(templateByStatus(AwStatus.warn));
    });
  });
});
