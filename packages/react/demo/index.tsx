import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TextInput } from '../dist/'

function Main() {
  return (
    <div>
      <a href='https://github.com/plantain-00/text-input-component/tree/master/packages/react/demo' target='_blank'>the source code of the demo</a>
      <br />
      <TextInput />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('container'))
