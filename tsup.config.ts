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
  // splitting: true,
  // sourcemap: true,
  // clean: true,
})
