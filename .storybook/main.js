const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const OUTPUT_DIR = '../dist';

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-jest',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
  ],

  async webpackFinal(config) {
    config.entry.push(path.join(__dirname, OUTPUT_DIR, `index.js`));
    fs.readdirSync(path.join(__dirname, OUTPUT_DIR, 'collection/components')).map(file => {
      jsFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.@(js|ts)`);
      try {
        if (fs.existsSync(jsFilePath)) {
          config.entry.push(jsFilePath);
        }
      } catch (err) {
        console.error(err);
      }

      // Add CSS
      let cssFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.@(css|scss)`);
      try {
        if (fs.existsSync(cssFilePath)) {
          config.entry.push(cssFilePath);
        }
      } catch (err) {
        console.error(err);
      }
    });

    // Add all static files to Storybook
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: '**/*',
            to: './',
            context: 'dist',
          },
        ],
      }),
    );

    // Write the files to disk and not to memory
    config.plugins.push(new WriteFilePlugin());

    return config;
  },
};
