import { defineConfig } from 'tsup'
import { wasmLoader } from 'esbuild-plugin-wasm'

export default defineConfig({
  esbuildPlugins: [wasmLoader()],
  entry: {
    'index': 'src/index.ts',
    'funcs': 'src/funcs/index.ts',
    'test/util': 'test/util/index.ts'
  },
  format: ['cjs', 'esm'],
  minify: 'terser',
  terserOptions: {
    // compress: {
    //   drop_console: true,
    //   drop_debugger: true,
    // },
    // https://terser.org/docs/options/#mangle-options
    "mangle": {
      "properties": {
        "regex": /^_[$]/,
        // "undeclared": true, // Mangle those names when they are accessed as properties of known top level variables but their declarations are never found in input code.
      },
      "toplevel": true,
      "reserved": [
        // # expected names in web-extension content
        "WeakSet", "Set",
        // # expected names in 3rd-party extensions' contents
        "requestIdleCallback",
        // # content global names:
        "browser",
      ],
    }
  },
  // splitting: true,
  // sourcemap: true,
  clean: true,
})
