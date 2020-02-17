import React from 'react'
import { TextInput } from '../packages/react/dist'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const app = renderer.create(<TextInput />)
  const rendered = app.toJSON()
  expect(rendered).toBeTruthy()
  app.unmount()
})
