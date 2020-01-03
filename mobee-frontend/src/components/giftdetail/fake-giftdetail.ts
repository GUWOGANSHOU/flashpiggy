export type IGift = {
  id: number | string
  owner: string // 所有福利/我的福利
  name: string // 名称
  price: number // 金额
  points: string // 积分
  deadlineDate: string // 截止日期
  deadlineTime: string // 截止时刻
  remain: number // 剩余数量
  describe: string // 抵用说明
  availableTime: string // 可用时段
  availableShop: string // 适用门店
  state: string // 卡券状态
  notice1: string // 注意事项1
  notice2: string // 注意事项2
  notice3: string // 注意事项3
  notice4: string // 注意事项4
}

export default [
  {
    owner: 'all',
    id: 2224,
    name: '最爱的蛋糕抵用券',
    price: 15,
    points: '500',
    deadlineDate: '2019/7/28',
    deadlineTime: '22:00',
    describe: '凭该卡券可抵用店内指定等价商品',
    availableTime: '周一至周日 10:00-24:00',
    availableShop: '大学城永嘉店',
    remain: 195,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'all',
    id: 1111,
    name: '古茗新品兑换券',
    price: 20,
    points: '800',
    deadlineDate: '2019/12/31',
    deadlineTime: '22:00',
    describe: '凭该卡券可兑换芝士莓莓中杯x1',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 320,
    state: '未使用',
    notice1: '·本卡不找零，不兑现；',
    notice2: '·领取后请在有效期前使用本卡;'
  },
  {
    owner: 'all',
    id: 1112,
    name: '星巴克咖啡抵用券',
    price: 25,
    points: '1,000',
    deadlineDate: '2019/10/28',
    deadlineTime: '15:30',
    describe: '凭该卡券可抵用店内指定等价商品',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 195,
    state: '已使用',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'all',
    id: 1113,
    name: '星巴克星冰乐兑换券',
    price: 25,
    points: '1,000',
    deadlineDate: '2019/6/12',
    deadlineTime: '15:30',
    describe: '凭该卡券可兑换抹茶星冰乐中杯x1',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 321,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'all',
    id: 2224,
    name: '最爱的蛋糕抵用券',
    price: 15,
    points: '20,000',
    deadlineDate: '2019/9/10',
    deadlineTime: '15:30',
    describe: '凭该卡券可抵用店内指定等价商品',
    availableTime: '周一至周日 10:00-24:00',
    availableShop: '正荣财富中心',
    remain: 218,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'mine',
    id: 1116,
    name: '星巴克咖啡抵用券',
    price: 25,
    points: '30,000',
    deadlineDate: '2019/7/28',
    deadlineTime: '15:30',
    describe: '凭该卡券可抵用店内指定等价商品',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 159,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'mine',
    id: 2226,
    name: '最爱的蛋糕抵用券',
    price: 15,
    points: '500',
    deadlineDate: '2019/8/28',
    deadlineTime: '14:00',
    describe: '凭该卡券可抵用店内指定等价商品',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 197,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice4: '具体使用细则以到店为准'
  },
  {
    owner: 'mine',
    id: 2227,
    name: '古茗新品兑换券',
    price: 15,
    points: '500',
    deadlineDate: '2019/10/28',
    deadlineTime: '19:30',
    describe: '凭该卡券可兑换芝士莓莓中杯x1',
    availableTime: '周一至周日 10:50-24:00',
    availableShop: '大学城永嘉店',
    remain: 208,
    state: '已过期',
    notice1: '·本卡可以在店内随意消费，不找零，不兑现；',
    notice2: '·本卡不可与店内其它优惠同时使用；',
    notice3: '·领取后请在有效期前使用；',
    notice5: '具体使用细则以到店为准'
  }
] as IGift[]
