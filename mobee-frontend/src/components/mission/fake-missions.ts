import { IMission } from './def'

export default [
  {
    id: 1111,
    avatar: require('../../images/Starbucks.png'),
    name: '星巴克调研任务',
    distance: 100,
    address: '闽侯县上街镇国宾大道268号永嘉天地16号楼地上一层1001单元',
    reward: 500,
    longitude: 119.1893578,
    latitude: 26.0571412,
    questions: [
      {
        desc: '你认为星巴克的环境怎么样',
        answers: ['很棒', '一般', '差劲']
      },
      {
        desc: '你觉得星巴克的新品海报怎么样',
        answers: [
          '非常棒，很想尝试新品',
          '无感，不会尝试新品',
          '差劲，不想尝试新品'
        ]
      },
      {
        desc: '你觉得星巴克的消费水准属于',
        answers: ['偏高', '普通', '偏低']
      },
      {
        desc: '你最喜欢的促销方式是',
        answers: ['折扣', '免费试饮', '积分促销']
      },
      {
        desc: '你对星巴克的评价是',
        answers: ['不喜欢', '喜欢星巴克的环境和氛围', '喜欢星巴克的饮品']
      },
      {
        desc: '你对这次的任务是怎么看的',
        answers: ['太繁琐', '还可以', '很简单']
      }
    ],
    needPictures: [
      {
        id: 100,
        desc: '提供一下店内环境以及后厨环境的照片',
        count: 3
      },
      {
        id: 100,
        desc: '提供一下店内新品海报的照片',
        count: 6
      }
    ],
    shop: '星巴克',
    timeConsuming: 10,
    completedPeopleCount: 3,
    availablePeopleCount: 50,
    deadlineDate: '2019/06/26',
    deadlineTime: '23:00'
  },
  {
    id: 2222,
    avatar: require('../../images/Starbucks.png'),
    name: '星巴克体验任务',
    distance: 90,
    address: '闽侯县上街镇国宾大道268号永嘉天地16号楼地上一层1001单元',
    reward: 100,
    longitude: 119.1883578,
    latitude: 26.0561412,
    questions: [
      {
        desc: '你认为星巴克的环境怎么样',
        answers: ['很棒', '一般', '差劲']
      },
      {
        desc: '你觉得星巴克的新品海报怎么样',
        answers: [
          '非常棒，很想尝试新品',
          '无感，不会尝试新品',
          '差劲，不想尝试新品'
        ]
      },
      {
        desc: '你觉得星巴克的消费水准属于',
        answers: ['偏高', '普通', '偏低']
      },
      {
        desc: '你最喜欢的促销方式是',
        answers: ['折扣', '免费试饮', '积分促销']
      },
      {
        desc: '你对星巴克的评价是',
        answers: ['不喜欢', '喜欢星巴克的环境和氛围', '喜欢星巴克的饮品']
      },
      {
        desc: '你对这次的任务是怎么看的',
        answers: ['太繁琐', '还可以', '很简单']
      }
    ],
    needPictures: [
      {
        id: 100,
        desc: '提供一下店内环境以及后厨环境的照片',
        count: 3
      },
      {
        id: 100,
        desc: '提供一下店内新品海报的照片',
        count: 6
      }
    ],
    shop: '星巴克',
    timeConsuming: 30,
    completedPeopleCount: 3,
    availablePeopleCount: 5,
    deadlineDate: '2109/06/26',
    deadlineTime: '23:00'
  }
] as IMission[]
