import * as React from 'react'
//import { Button } from 'antd'

import * as Styles from './index.scss'
import { ComponentExt } from '@utils/reactExt'

class RButton extends ComponentExt {

  showMsg = () => {
    this.$message.success('通知')
  }

  render() {
    return (
      <div className={Styles.button}>
        {/* <Button onClick={this.showMsg}></Button> */}
      </div>
    )
  }
}

export default RButton