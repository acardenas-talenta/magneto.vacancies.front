/// <reference types="vitest" />
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { loadEnvInHtmlPlugin } from '../../packages/vite/plugins/loadEnvInHtml.plugin';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const port = env.MG_APP_MAIN_DOMAIN ? Number(new URL(env.MG_APP_MAIN_DOMAIN).port) : undefined;

  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
    },
    base: '/',
    server: {
      port,
      cors: true,
      host: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port: 8012,
      host: true,
      allowedHosts: ['*'],
    },
    resolve: {
      alias: [
        {
          find: '@app',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    envPrefix: 'MG_',
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development' ? 'inline' : false,
      lib: {
        entry: 'src/entries/candidateView.entry.tsx',
        name: 'CandidateViewEntry',
        fileName: 'candidate-view-entry',
        formats: ['iife'],
      },
      rollupOptions: {
        external: [],
        output: {
          globals: {},
        },
      },
    },
    plugins: [react({ tsDecorators: true }), loadEnvInHtmlPlugin(env)],
  };
});
