/// <reference types="vitest" />
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { compression } from 'vite-plugin-compression2';
import { loadEnvInHtmlPlugin } from '../../packages/vite/plugins/loadEnvInHtml.plugin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const port = env.MG_APP_MAIN_DOMAIN ? Number(new URL(env.MG_APP_MAIN_DOMAIN).port) : undefined;

  return {
    base: '/',
    server: {
      port,
      cors: true,
      host: true,
      fs: {
        strict: true,
      },
    },
    resolve: {
      alias: [
        {
          find: '@app',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
          find: '@tests',
          replacement: fileURLToPath(new URL('./src/tests', import.meta.url)),
        },
        {
          find: '@test-utils',
          replacement: fileURLToPath(new URL('./src/tests/utils/test-utils.tsx', import.meta.url)),
        },
        {
          find: '@vacancies/shared',
          replacement: fileURLToPath(new URL('../../packages/shared/src', import.meta.url)),
        },
      ],
    },
    envPrefix: 'MG_',
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development' ? 'inline' : false,
      rollupOptions: {
        output: {
          manualChunks: {
            redux: ['react-redux', 'redux', '@reduxjs/toolkit'],
          },
        },
      },
    },
    plugins: [react({ tsDecorators: true }), loadEnvInHtmlPlugin(env), compression({ algorithms: ['gzip'] })],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/tests/setup.ts',
      pool: 'forks',
      poolOptions: {
        forks: {
          singleFork: true,
        },
      },
    },
  } as UserConfig;
});
