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
    !isStorybook &&
      reactRouter({
        ignoredRouteFiles: ['**/.*'],
        future: {
          unstable_optimizeDeps: true,
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_lazyRouteDiscovery: true,
          v3_singleFetch: true,
          v3_routeConfig: true,
        },
      }),
    tsconfigPaths(),
  ],
});
