// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { API, comify, MyComponent, ResponseType, wxp } from 'base'
// import { IMission } from '../mission/def'
// import fakeMissions from '../mission/fake-missions'

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
    selectMission: {
      type: Object
    }
  }

  /**
   * 组件的初始数据
   */
  data = {
    showDetail: false,
    giftBar,
    activeGiftBar: giftBar.ALL,
    // missions: [] as IMission[],
    missionCode: '0',
    missions: [] as ResponseType.mission[],
    userInfo: (null as unknown) as wxp.getUserInfo.PromisedPropUserInfo
  }

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}
  onReady() {
    // 获取已接受任务列表，拿到missionCode
    API.getMissionListByUserId({
      missionId: '',
      usercode: '0000734d-a6d3-4e29-a3d6-eba2a9fdbf36'
    }).then(missions => {
      console.log(missions)
      console.log(missions.missionCode)
      API.getQuestionAll({
        missionId: missions.missionCode,
        pageNum: 1,
        pageSize: 10,
        orderBy: 'now_accept desc'
      }).then(missions => {
        console.log(missions)
        this.setDataSmart({
          missions,
          userInfo: this.store.userInfo
        })
        if (!missions.length) {
          throw new Error('现在暂时没有任务')
        }
        // return Promise.all([API.getCustomerById()])
      })
    })
  }
  // 点击任务详情
  giftbarHandle(event: any) {
    this.data.missionCode = event.currentTarget.dataset.missionsCode
    const mymission = this.data.missions.find(item => {
      return item.missionsCode === this.data.missionCode
    })
    this.setDataSmart({
      selectMission: mymission,
      showDetail: true
    })
  }
  switchGiftBar(event: any) {
    const key = event.target.dataset.key as giftBar
    this.setDataSmart({
      activeGiftBar: key
    })
  }
}
