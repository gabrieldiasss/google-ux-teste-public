import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default [
  // JavaScript and TypeScript build configuration
  {
    threeshake: true,
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      vanillaExtractPlugin({
        identifiers: ({ hash }) => `design-system-senai_${hash}`,
      }),
      peerDepsExternal(), // Exclude peer dependencies like react and react-dom
      resolve(), // Resolve ESM and CJS modules
      commonjs(), // Convert CJS modules to ESM
      typescript({
        tsconfig: './tsconfig.json',
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      image(),
      terser(), // Minify output
    ],
    external: ['react', 'react-dom'], // Ensure React and React DOM are not bundled
  },
  // TypeScript definitions build configuration
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
