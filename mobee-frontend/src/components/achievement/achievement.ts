// 此文件是由模板文件 ".dtpl/component/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { API, comify, MyComponent, ResponseType, wxp } from 'base'
// import { fakeAchievements, IAchievement } from './fakeAchievement'

@comify()
export default class extends MyComponent {
  /**
   * 组件的属性列表
   */
  properties = {}

  /**
   * 组件的初始数据
   * 组件的初始数据
   */
  data = {
    showAchiDetail: false,
    showBlack: false,
    // achievements: [] as IAchievement[],
    // activeAchievement: (null as unknown) as IAchievement
    allAchievements: [] as ResponseType.achievement[],
    activeAchievement: [] as ResponseType.achievement[]
  }

  getAchievementById(achievementCode: string) {
    return this.data.allAchievements.find(
      v => v.achievementCode === achievementCode
    )
  }

  onReady() {
    API.getAchievementAll({
      pageNum: 1,
      pageSize: 10,
      orderBy: 'bonus_points desc'
    }).then(achievements => {
      console.log(achievements)
      this.setDataSmart({
        allAchievements: achievements
      })
      return achievements[0].achievementCode
    })
  }

  /**
   * 组件属性值有更新时会调用此函数，不需要在 properties 中设置 observer 函数
   */
  onPropUpdate(prop: string, newValue: any, oldValue: any) {}
  onExchange(e: any) {
    // 如果未达到成就要求
    console.log(this.data.activeAchievement)
    if (
      this.data.activeAchievement[0].missionSum <
      this.data.activeAchievement[0].goalSum
    ) {
      wxp.showToast({
        title: '您的任务还未完成，兑换失败，继续努力吧~',
        icon: 'none'
      })
    } else {
      // 达成成就
      API.addRecoreAchievementAndUserCode({
        usercode: 'd3a083bd-ab52-4b0c-bd49-720d4d027fe9',
        achievementId: '85010dd3-5a4f-4423-a7dc-7de39073186f'
      }).then(achievements => {
        console.log(achievements)
      })
      wxp.showToast({
        title: '兑换成功',
        icon: 'none'
      })
    }
    this.setDataSmart({
      showAchiDetail: false,
      showBlack: false
    })
  }
  showDetail(e: any) {
    const achievementCode = e.currentTarget.dataset.id as string
    console.log(achievementCode)
    const a = this.getAchievementById(achievementCode)
    if (!a) {
      wxp.showToast({
        title: '找不到该成就.',
        icon: 'none'
      })
      return
    }
    this.setDataSmart({
      activeAchievement: a,
      showAchiDetail: true,
      showBlack: true
    })
  }
  closeDetail(e: any) {
    this.setDataSmart({
      showAchiDetail: false,
      showBlack: false
    })
  }
}
