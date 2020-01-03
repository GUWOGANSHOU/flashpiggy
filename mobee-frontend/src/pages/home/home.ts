// 此文件是由模板文件 ".dtpl/page/$rawModuleName.ts.dtpl" 生成的，你可以自行修改模板

import { MyPage, pagify /*, wxp*/ } from 'base/'

export enum TABS {
  MISSION,
  ACHIEVEMENT,
  EXCHANGE,
  MSG
}

@pagify()
export default class extends MyPage {
  data = {
    TABS,
    TabsArray: Object.keys(TABS)
      .filter(k => typeof TABS[k as any] === 'number')
      .map(k => TABS[k as any]),
    activeTab: TABS.MISSION,
    tabTitle: {
      [TABS.MISSION]: '任务',
      [TABS.ACHIEVEMENT]: '成就',
      [TABS.EXCHANGE]: '兑换',
      [TABS.MSG]: '消息'
    },
    imageList: {
      [TABS.MISSION]: {
        active: require('images/nav-tab/task-a.svg'),
        inactive: require('images/nav-tab/task-i.svg')
      },
      [TABS.ACHIEVEMENT]: {
        active: require('images/nav-tab/achievement-a.svg'),
        inactive: require('images/nav-tab/achievement-i.svg')
      },
      [TABS.EXCHANGE]: {
        active: require('images/nav-tab/exchange-a.svg'),
        inactive: require('images/nav-tab/exchange-i.svg')
      },
      [TABS.MSG]: {
        active: require('images/nav-tab/msg-a.svg'),
        inactive: require('images/nav-tab/msg-i.svg')
      }
    }
  }

  setActiveTap(event: any) {
    this.setDataSmart({
      activeTab: event.target.dataset.key as TABS
    })
  }

  async onLoad(options: any) {
    // console.log(await wxp.getUserInfo())
  }
}
