// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { API, comify, MyComponent, wxp } from 'base'
import { IData, IMission, ORDER, SWITCH } from './def'
import fakeMissions from './fake-missions'
@comify()
export default class extends MyComponent<IData> {
  /**
   * 组件的属性列表
   */
  properties = {
    userInfo: Object
  }

  /**
   * 组件的初始数据
   */
  data = {
    SWITCH,
    ORDER,
    switchActive: SWITCH.MAP,
    orderActive: ORDER.DISTANCE,
    markers: [],
    missions: [],
    missionActive: false,
    missionActiveStep: 0,
    missionActiveContent: null,
    missionNeedPictures: 0,
    step2ActiveQuestion: 1,
    step2QestionSelected: [],
    questions: [],
    needPictures: []
  } as IData

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}

  onReady() {
    const missions = fakeMissions
    this.setDataSmart({
      missions,
      markers: missions.map(v => ({
        id: v.id,
        longitude: v.longitude,
        latitude: v.latitude,
        iconPath: require('images/map-icon1.png'),
        zIndex: -1,
        width: 50,
        height: 75,
        label: {
          content: v.reward.toString(),
          anchorY: -45,
          anchorX: -5 * v.reward.toString().length,
          fontSize: 16,
          color: '#4f7948'
        }
      })),
      missionActiveContent: null
    })
    this.sortMissions()
    // for debug
    // this.missionTapHandler({markerId: 1111})
    console.log(API.name)
    // API.getMissionAll()
    // .then(missions => {
    //   console.log(missions)
    //   if (!missions.length)
    //     throw new Error('现在暂时没有任务')
    //   return missions[0].missionsCode
    // })
    // .then(id => API.getMissionById(id))
    // .then(mission => console.log(mission))
    // 成就开始========================================================================================
    // API.getAchievementAll({
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy:"bonus_points desc"
    // })
    // .then(achievements => {
    //   console.log(achievements)
    //   return achievements[0].achievementCode
    // })
    // .then(id=>API.getAchievementById(id))
    // .then(achievement => console.log(achievement));

    // 已达成成就列表及记录
    // API.getAchievementAndUserCodeById({
    //   usercode:"d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy:"bonus_points desc"
    // })
    // .then(achievements => {
    //   console.log(achievements.Achievements)
    //   console.log(achievements.RecordAchievementConsumers)
    // })
    // 达成成就
    // API.addRecoreAchievementAndUserCode({
    //   usercode:"d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
    //   achievementId: "85010dd3-5a4f-4423-a7dc-7de39073186f"
    // })
    // .then(achievements => {
    //   console.log(achievement)
    // })
    // 商品开始========================================================================================
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
    // 已消费商品列表及记录
    // API.getgoodAndUserCodeById({
    //   usercode:"d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy:"points desc"
    // })
    // .then(achievements => {
    //   console.log(achievements.goods)
    //   console.log(achievements.RecordgoodConsumers)
    // })
    // // 兑换商品
    // API.addRecoregoodAndUserCode({
    //   usercode:"f7a59c7f-1c33-4b25-afed-67b752e1c52f",
    //   goodId: "3696bd0a-3b7e-406a-8061-b4488efe8974"
    // })
    // .then(achievements => {
    //   console.log(achievement)
    // })
    // 任务开始========================================================================================
    // 获取当前最近任务对应项目
    // API.getProjectMissionleast({
    //   longitude: 119.2552,
    //   latitude: 26.0308,
    //   distance: 5,
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy: 'now_accept desc'
    // }).then(achievements => {
    //   console.log(achievements)
    // })

    // 获取当前最近任务列表
    // API.getmissionAll({
    //   longitude: 119.2552,
    //   latitude: 26.0308,
    //   distance: 5,
    //   pageNum: 1,
    //   pageSize: 10,
    //   orderBy: 'now_accept desc'
    // }).then(missions => {
    //   console.log(missions)
    //   if (!missions.length) throw new Error('现在暂时没有任务')
    //   // return Promise.all([API.getCustomerById()])
    // })

    // 放弃任务
    // API.giveupmissionById({
    //   missionId: "7a8927ab-f204-483d-a74a-774985e5a84f",
    //   recordcode: "7a8927ab-f204-483d-a74a-774985e5a84f"
    //   })
    //   .then(achievements => {
    //     console.log(achievements)
    //   })
  }

  getMissionById(id: number) {
    return this.data.missions.find(v => v.id === id)
  }

  setMissionContent(content: IMission | null = null) {
    this.setDataSmart({
      missionActiveContent: content,
      questions: [],
      needPictures: []
    })
    if (content !== null) {
      const { needPictures, questions } = content
      this.setDataSmart({
        missionNeedPictures: content.needPictures.reduce(
          (p, v) => p + v.count,
          0
        ),
        questions,
        needPictures
      })
    }
  }

  setMissionActive(active: boolean) {
    active
      ? this.setDataSmart({
          switchActive: SWITCH.MAP,
          missionActive: true
        })
      : this.setDataSmart({ missionActive: false })
  }

  setSwitchActive(event: any) {
    this.setDataSmart({
      switchActive: event.currentTarget.dataset.key as SWITCH
    })
  }

  sortMissions(order = ORDER.DISTANCE) {
    this.setDataSmart({
      missions: this.data.missions.sort((a, b) => {
        switch (order) {
          case ORDER.REWARD:
            return b.reward - a.reward
          default:
            return a.distance - b.distance
        }
      })
    })
  }

  setOrderActive(event: any) {
    const order = event.currentTarget.dataset.key as ORDER
    this.setDataSmart({
      orderActive: order
    })
    this.sortMissions(order)
  }

  missionBackToMapHandler(event: any) {
    this.setMissionActive(false)
  }

  landingMissionHandler(event: any) {
    if (this.data.missionActiveContent) {
      this.setMissionActive(true)
    }
  }

  setStepActive(event: any) {
    const step = event.currentTarget.dataset.key as number
    this.setDataSmart({
      missionActiveStep: step
    })
  }

  submitMission(event: any) {
    this.setMissionContent()
    this.setMissionActive(false)

    console.log(this.data.step2QestionSelected)
    this.setDataSmart({
      step2ActiveQuestion: 1,
      step2QestionSelected: [],
      missionActiveStep: 0
    })
  }

  setStep2ActiveQuestion(event: any) {
    this.setDataSmart({
      step2ActiveQuestion: event.currentTarget.dataset.key as number
    })
  }

  setStep2QestionSelected(event: any) {
    const [index, answerIndex] = event.currentTarget.dataset.key as number[]
    const newStep2QestionSelected = this.data.step2QestionSelected.slice()
    newStep2QestionSelected[index] = answerIndex
    this.setDataSmart({
      step2QestionSelected: newStep2QestionSelected
    })
  }

  missionTapHandler(event: any) {
    console.log(event)
    const missionId =
      ((event.markerId || event.currentTarget.dataset.id) as number) || null
    if (!missionId) {
      wxp.showToast({
        title: '错误',
        icon: 'none'
      })
      return
    }

    if (this.data.missionActiveContent && this.data.missionActiveStep) {
      if (this.data.missionActiveContent.id === missionId) {
        this.setMissionActive(true)
        return
      }
      wxp.showToast({
        title: '已经接受任务了.',
        icon: 'none'
      })
      return
    }

    this.setMissionContent(this.getMissionById(missionId))
    this.setMissionActive(true)
  }

  selectPictures(event: any) {
    wxp.chooseImage().then(res => {
      console.log(res)
    })
  }

  testfunc(event: any) {
    console.log('tapped', event)
  }
}
