import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

// Vite config to compile Sass to stylesheets/application.css
export default defineConfig(({ command, mode }) => {
  const isDev = mode === 'development' || command === 'serve';

  const headerContent = fs.readFileSync(path.resolve(__dirname, 'header.css'), 'utf-8');

  return {
    // We are not serving an index.html. Use build/watch instead of dev.
    // https://v5.vite.dev/config/build-options.html
    build: {
      outDir: 'stylesheets',
      assetsDir: '',
      emptyOutDir: false,
      sourcemap: isDev,
      cssCodeSplit: false,
      cssMinify: false,
      rollupOptions: {
        input: path.resolve(__dirname, 'sass/application.scss'),
        output: {
          // Ensure the CSS file name is deterministic and without hash
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'application.css';
            }
            return '[name][extname]';
          }
        },
        plugins: [
          {
            name: 'theme-header',
            generateBundle(options, bundle) {
              Object.keys(bundle).forEach(fileName => {
                const file = bundle[fileName];
                if (fileName === 'application.css' && file.type === 'asset') {
                  file.source = headerContent + file.source;
                }
              });
            }
          }
        ]
      }
    },
    css: {
      devSourcemap: true,
      postcss: './postcss.config.js',
      preprocessorOptions: {
        scss: {
          // Silence only the @import deprecation warnings to avoid noisy output
          // until we fully migrate to @use/@forward.
          silenceDeprecations: ['import']
        }
      }
    },
    // Note: Vite dev server is not used here because Redmine serves HTML.
    // If you still want to try, you can run `vite` and integrate the client in your pages.
    server: {
      port: 3001,
      strictPort: false,
      // Example proxy (not used by default since we don't serve index.html)
      proxy: {
        '/': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          // ws: true
        }
      }
    }
  };
});
