import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { hot } from 'react-hot-loader'

import { ComponentExt } from '@utils/reactExt'

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
}

@hot(module)
// 限制当前数据的更改方式
@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> {

  increase = (num: number) => {
    this.props.globalStore.increase(num) 
  }

  decrease = (num: number) => {
    this.props.globalStore.decrease(num)
  }

  render() {
    const data = 1
    const { num } = this.props.globalStore
    return (
      <div>
        <div>{ num }</div>
        <button onClick={ this.increase.bind(this,data) }>增加</button>
        <button onClick={ this.decrease.bind(this,data) }>减少</button>
      </div>
    )
  }
}

export default Counter