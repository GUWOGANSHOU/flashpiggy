// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { comify, MyComponent } from 'base'

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    useSelectGift: {
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

  onReady() {
    // console.log(this.properties.useSelectGift)
    // console.log(API.name);
    // API.getGoodAll({
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy:"points desc"
    // })
    // .then(goods => {
    //   console.log(goods)
    //   return goods[0].goodCode
    // })
    // .then(id=>API.getgoodById(id))
    // .then(achievement => console.log(achievement));
  }
  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}

  onBack(event: any) {
    this.setDataSmart({
      show: false
    })
  }
}
