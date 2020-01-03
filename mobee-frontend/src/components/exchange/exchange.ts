// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { API, comify, MyComponent, ResponseType, wxp } from 'base'
// import fakeGiftdetail, { IGift } from '../giftdetail/fake-giftdetail'

enum giftBar {
  ALL,
  MY
}

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {
    selectGift: {
      type: Object
    }, // 所有福利-选中的礼券详情
    useSelectGift: {
      type: Object
    } // 我的福利-使用选中的礼券
  }

  /**
   * 组件的初始数据
   */
  data = {
    showUse: false,
    giftdetail: false,
    giftBar,
    activeGiftBar: giftBar.ALL,
    // giftdetails: [] as IGift[],
    // allgifts: [] as IGift[],
    // mygifts: [] as IGift[],
    // usedgifts: [] as IGift[],
    allgifts: [] as ResponseType.good[], // 所有福利
    validGifts: [] as ResponseType.good[], // 我的福利-有效
    overdueGifts: [] as ResponseType.good[], // 我的福利-过期
    usedgifts: [] as ResponseType.good[], // 我的福利-已使用
    goodCode: '0',
    userInfo: (null as unknown) as wxp.getUserInfo.PromisedPropUserInfo
  }

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}
  onReady() {
    // this.setDataSmart({
    //   giftdetails: fakeGiftdetail,
    //   userInfo: this.store.userInfo
    // })
    // this.sortGift()
    // 获取所有福利列表
    API.getGoodAll({
      pageNum: 1,
      pageSize: 10,
      orderBy: 'points desc'
    }).then(goods => {
      this.setDataSmart({
        allgifts: goods
      })
      // return goods[0].goodCode
    })
    // 获取我的福利列表
    API.getgoodAndUserCodeById({
      usercode: '020f43fe-53f3-46e6-a6f6-85c75ff66923',
      pageNum: 1,
      pageSize: 10,
      orderBy: 'points desc'
    }).then(achievements => {
      console.log(achievements.goods) // 商品信息
      console.log(achievements.RecordgoodConsumers) // 消费记录信息
      const validData = achievements.goods.filter(item => {
        return item.state === '1' // 有效
      })
      const usedData = achievements.goods.filter(item => {
        return item.state === '2' // 已使用
      })
      const overdueData = achievements.goods.filter(item => {
        return item.state === '3' // 已过期
      })
      this.setDataSmart({
        usedgifts: usedData,
        overdueGifts: overdueData,
        validGifts: validData
      })
    })
  }
  // 所有福利、我的福利、已使用福利
  // sortGift() {
  //   const alldata = fakeGiftdetail.filter(item => {
  //     return item.owner === 'all'
  //   })
  //   this.setDataSmart({
  //     allgifts: alldata
  //   })
  //   // console.log(this.data.allgifts)
  //   const mydata = fakeGiftdetail.filter(item => {
  //     return item.owner === 'mine'
  //   })
  //   this.setDataSmart({
  //     mygifts: mydata
  //   })
  //   const useddata = fakeGiftdetail.filter(item => {
  //     return item.owner === 'mine' && item.state === '已使用'
  //   })
  //   this.setDataSmart({
  //     usedgifts: useddata
  //   })
  //   // console.log(this.data.usedgifts)
  // }
  // 点击所有福利中的giftbar - 领取
  giftbarHandle(event: any) {
    this.data.goodCode = event.currentTarget.dataset.id
    const gifts = this.data.allgifts.find(item => {
      return item.goodCode === this.data.goodCode
    })
    // console.log(gifts)
    this.setDataSmart({
      selectGift: gifts,
      giftdetail: true
    })
  }
  // 点击我的福利中的giftbar - 使用
  giftbarHandle2(event: any) {
    this.data.goodCode = event.currentTarget.dataset.id
    const validGift = this.data.validGifts.find(item => {
      return item.goodCode === this.data.goodCode
    })
    this.setDataSmart({
      useSelectGift: validGift,
      showUse: true
    })
  }
  switchGiftBar(event: any) {
    const key = event.target.dataset.key as giftBar
    this.setDataSmart({
      activeGiftBar: key
    })
  }
}
