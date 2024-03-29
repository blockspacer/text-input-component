import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'packages/vue/dist/index.js',
  plugins: [
    resolve({ browser: true }),
    uglify(),
    commonjs()
  ],
  output: {
    name: 'TextInput',
    file: 'packages/vue/dist/text-input-vue-component.min.js',
    format: 'umd',
    globals: {
      'vue-class-component': 'VueClassComponent'
    }
  },
  external: [
    'vue',
    'vue-class-component'
  ]
}
