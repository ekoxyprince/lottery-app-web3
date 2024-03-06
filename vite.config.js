import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    nodePolyfills({
      include: ['path'],
      exclude: [
        'http',
      ],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        fs: 'memfs',
      },
      protocolImports: true,
    })
  ]
})
