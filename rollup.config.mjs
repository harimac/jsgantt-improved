import { terser } from 'rollup-plugin-terser';
//import { scss } from 'rollup-plugin-scss';

export default [{
  input: 'dist/jsgantt.js',
  output: [
    // Terser ‚É‚æ‚éˆ³k”Åƒtƒ@ƒCƒ‹
    {
      file: 'dist/jsgantt.min.js',
      format: 'es',
      sourcemap: true,
      plugins: [
        terser()
      ]
    }
  ]
}]