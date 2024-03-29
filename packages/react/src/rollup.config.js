import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'packages/react/dist/index.js',
  plugins: [
    resolve({ browser: true }),
    uglify(),
    commonjs()
  ],
  output: {
    name: 'TextInput',
    file: 'packages/react/dist/text-input-react-component.min.js',
    format: 'umd'
  },
  external: [
    'react',
    'react-dom'
  ]
}
