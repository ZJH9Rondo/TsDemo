import { observable, action } from 'mobx'

export class GlobalStore {
  // 测试
  @observable
  num: number = 0

  // 增加数字
  @action
  increase = (num: number) => {
    this.num += num
  }

  // 减少数字
  @action
  decrease = (num: number) => {
    this.num -= num
  }
}

export default new GlobalStore()