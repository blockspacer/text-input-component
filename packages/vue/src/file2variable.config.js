module.exports = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  /**
   * @argument {string} file
   */
  handler: file => {
    return {
      type: 'vue',
      name: 'TextInput',
      path: './index'
    }
  },
  out: 'packages/vue/src/variables.ts'
}
