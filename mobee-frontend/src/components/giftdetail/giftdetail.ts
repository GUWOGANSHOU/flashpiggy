// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { API, comify, MyComponent, wxp } from 'base'
// import Gifts from './fake-giftdetail'

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    selectGift: {
      // value:{a:'test',b:'test'},
      type: Object
    },
    show: {
      value: false,
      type: Boolean
    }
  }

  /**
   * 组件的初始数据
   */
  data = {}

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}
  onBack(event: any) {
    this.setDataSmart({
      show: false
    })
  }
  onReady() {}
  getGift() {
    // 兑换商品
    API.addRecoregoodAndUserCode({
      usercode: '020f43fe-53f3-46e6-a6f6-85c75ff66923',
      goodId: '3696bd0a-3b7e-406a-8061-b4488efe8974'
    }).then(achievements => {
      console.log(achievements)
    })
    // console.log(this.properties.selectGift.points)

    wxp.showToast({
      title: '领取成功',
      icon: 'none'
    })
    this.setDataSmart({})
  }
}
