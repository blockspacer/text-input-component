import Vue from 'vue'
import Component from 'vue-class-component'
import { indexTemplateHtml, indexTemplateHtmlStatic } from './variables'

@Component({
  render: indexTemplateHtml,
  staticRenderFns: indexTemplateHtmlStatic,
  props: []
})
export class TextInput extends Vue {
}

Vue.component('text-input', TextInput)
