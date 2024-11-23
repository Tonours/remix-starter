import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    svgr({
      svgrOptions: {
        svgProps: {
          className: 'icon-svg',
        },
      },
    }),
    !isStorybook && reactRouter(),
    tsconfigPaths(),
  ],
});
