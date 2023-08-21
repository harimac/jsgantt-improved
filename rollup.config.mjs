import { terser } from 'rollup-plugin-terser';
//import { scss } from 'rollup-plugin-scss';

export default [{
  input: 'dist/jsgantt.js',
  output: [
    // Terser �ɂ�鈳�k�Ńt�@�C��
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