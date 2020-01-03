export interface IAchievement {
  id: number
  title: string
  subTitle: string
  image: string
  complete: number
  total: number
  reward: number
}

export const fakeAchievements: IAchievement[] = [
  {
    id: 1,
    title: '初出茅庐',
    subTitle: '挑战完成3个任务',
    image: require('../../images/6.png'),
    complete: 3,
    total: 3,
    reward: 200
  },
  {
    id: 2,
    title: '小试牛刀',
    subTitle: '挑战完成5个任务',
    image: require('../../images/level2.png'),
    complete: 5,
    total: 5,
    reward: 350
  },
  {
    id: 3,
    title: '锋芒毕露',
    subTitle: '挑战完成10个任务',
    image: require('../../images/level3.png'),
    complete: 9,
    total: 10,
    reward: 500
  },
  {
    id: 4,
    title: '驾轻就熟',
    subTitle: '挑战完成20个任务',
    image: require('../../images/level4.png'),
    complete: 9,
    total: 20,
    reward: 800
  },
  {
    id: 5,
    title: '闪电侠',
    subTitle: '挑战20个任务最快完成',
    image: require('../../images/level5.png'),
    complete: 9,
    total: 20,
    reward: 1200
  },
  {
    id: 6,
    title: '出类拔萃',
    subTitle: '挑战完成40个任务',
    image: require('../../images/7.png'),
    complete: 9,
    total: 40,
    reward: 2000
  }
]
