import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;

export default {
  input: 'src/YouTubeVideo.jsx',
  output: {
    file: 'build/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    commonjs(),
    babel({ exclude: './node_modules/**' }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env || 'development') }),
    env === 'production' && terser(),
  ],
};
