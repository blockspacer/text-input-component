import { TextInput } from '../packages/vue/dist'

import { mount } from 'vue-test-utils'

it('renders without crashing', () => {
  const app = mount(TextInput, {
    propsData: {
    }
  })
  const rendered = app.html()
  expect(rendered).toBeTruthy()
  app.destroy()
})
