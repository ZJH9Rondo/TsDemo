import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import Counter from '@views/Counter'
import * as Styles from './index.scss'
import * as store from './store'

// 限制数据修改方式
configure({ enforceActions: 'observed' })

const render = () => {
  ReactDOM.render(
    <Provider {...store}>
      <Counter />
    </Provider>,
    document.querySelector('#app')
  )
}

render()