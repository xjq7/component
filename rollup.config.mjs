import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

export default {
  input: './src/main.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    globals: { react: 'React', 'react-dom': 'ReactDOM' },
    name: 'cmp',
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    commonjs(),
    nodeResolve(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      use: ['less'],
      extract: true,
    }),
  ],
};
