import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/main.ts',
  output: {
    file: 'dist.js',
    format: 'umd',
  },
  plugin: [
    postcss({
      extract: true,
      plugins: [],
    }),
  ],
};
