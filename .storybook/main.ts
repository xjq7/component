import type { StorybookConfig } from '@storybook/react-vite';
import rollupConfig from '../rollup.config.mjs';
import path from 'path';
type A = StorybookConfig['viteFinal'];
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return config;
  },
};
export default config;
