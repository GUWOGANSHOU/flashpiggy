export type ResponseData<T> = {
  code: number
  msg: string
  data: T
  timestamp: number
}

// 任务信息
export type mission = {
  // {
  //   "missionsCode": "8dcf7122-8753-4453-8a81-8e999efd3b00",
  //   "missionsName": "任务名称",
  //   "projectCode": "12fbda58-f877-406f-98b7-7a5fc78fae49",
  //   "shopCode": "dca894db-bd3f-4b24-9676-6bf7ffaf61ac",
  //   "missionsStatus": "2",
  //   "maxNum": 27,
  //   "nowAccept": 20,
  //   "nowCompletedNum": 59,
  //   "nowExamedNum": 49
  // }
  maxNum: number
  missionsCode: string
  missionsName: string
  missionsStatus: string
  nowAccept: number
  nowCompletedNum: number
  nowExamedNum: number
  projectCode: string
  shopCode: string
}

export type recordMissionsConsumer = {
  // "recordMissionConsumerCode": "2256b246c75e4265a873dd4b9c22dfa8",
  // "userCode": "d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
  // "missionCode": "008bb4f5-d8fe-4dc0-88e9-aac6e7d4bf1a",
  // "nowIndex": null,
  // "createTime": 1546451526000,
  // "status": "1"
  recordMissionConsumerCode: string
  userCode: string
  missionCode: string
  nowIndex: number
  createTime: number
  state: string
}

// 项目信息
export type project = {
  // {
  //   "projectCode": "c17c81c5-e5dc-4c26-8c33-2ce985507149",
  //   "createBy": "7d4c5259-e0bf-427e-860a-374b245894aa",
  //   "name": "新兴际华集团",
  //   "type": "3",
  //   "status": "0",
  //   "createTime": 1051419590000,
  //   "beginTime": 1389411633000,
  //   "time": 11.5,
  //   "url": "https://picture.gaocimi.cn/static/project.jpg",
  //   "basePoints": 58969,
  //   "picturePoints": 462,
  //   "maxMissionsNum": 99,
  //   "shopCode": "18ae8988-934b-4565-bb19-86dcb4025ff0",
  //   "missionStatus": null,
  //   "maxNum": 170,
  //   "nowAccept": 20,
  //   "nowCompletedNum": 26,
  //   "nowExamedNum": 99
  // }
  projectCode: string
  createBy: string
  name: string
  type: string
  status: string
  createTime: string
  beginTime: string
  time: number
  url: string
  basePoints: number
  picturePoints: number
  maxMissionsNum: number
  shopCode: string
  missionStatus: number
  maxNum: number
  nowAccept: number
  nowCompletedNum: number
  nowExamedNum: number
}

// 成就信息
export type achievement = {
  // {
  //   "achievementCode": "3c9a4a97-c401-4156-ba77-13760eced030",
  //   "name": "成就或者活动名称",
  //   "bonusPoints": 93,
  //   "url": "https://picture.gaocimi.cn/static/achievement.jpg",
  //   "type": "3",
  //   "state": "2",
  //   "num": 26,
  //   "beginTime": 1398099509000,
  //   "endTime": 1009355289000,
  //   "creatTime": 1105017244000,
  //   "createBy": "管理员",
  //   "missionSum": 50,
  //   "goalSum": 98963,
  //   "completionRate": 1.56,
  //   "lable": "成就标签",
  //   "introduce": "成就介绍"
  // }
  achievementCode: string
  name: string
  bonusPoints: number
  url: string
  type: string
  state: string
  num: number
  beginTime: string
  endTime: string
  creatTime: string
  createBy: string
  missionSum: number
  goalSum: number
  completionRate: number
  lable: string
  introduce: string
}

// 用户获取成就记录
export type recordAchievementConsumer = {
  // {
  //   "recordACCode": "2019010222533775661ba7237713647af94932021b4fad9c5647453569935729",
  //   "userCode": "d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
  //   "achievementCode": "85010dd3-5a4f-4423-a7dc-7de39073186f",
  //   "createTime": 1546440819000
  // }
  recordACCode: string
  userCode: string
  achievementCode: string
  createTime: string
}

// 商品信息
export type good = {
  // {
  //   "goodCode": "3696bd0a-3b7e-406a-8061-b4488efe8974",
  //   "title": "标题",
  //   "name": "商品名称",
  //   "keyCode": " ",
  //   "state": "2",
  //   "createTime": 1439131715000,
  //   "endTime": 1522124831000,
  //   "sum": 81,
  //   "num": 38,
  //   "type": "1",
  //   "points": 295,
  //   "businessCode": "300f5d8f-7f8f-4f9d-a5b9-98038ba2365a",
  //   "introduce": "商品介绍",
  //   "url": "https://picture.gaocimi.cn/static/goods.jpg",
  //   "extendS1": " ",
  //   "extendI1": 0,
  //   "extendF1": 2,
  //   "extendD1": 1359475265000
  // }
  goodCode: string
  title: string // 适用门店
  name: string
  keyCode: string
  state: string
  createTime: string // 可用时段
  endTime: string
  sum: number
  num: number
  type: string
  points: number
  businessCode: string
  introduce: string // 抵用说明
  url: string
  // extendS1 :  string,  注意事项
  // extendI1 :  0,       礼品抵用券价值
  // extendF1 :  2,
  // extendD1 :  1359475265000
}

// 消费记录信息
export type recordGoodsConsumer = {
  // "recordGCCode": "260e89df-0fb0-4fc1-9d1f-9aa36b779a9a",
  // "userCode": "d3a083bd-ab52-4b0c-bd49-720d4d027fe9",
  // "goodsCode": "6434011d-4435-4fd6-b4f6-6221156786ee",
  // "points": 157,
  // "num": 79,
  // "keyCode": "1111549c-7748-475a-b182-e613956aa99e",
  // "createTime": 1220544673000,
  // "state": "1"
  recordGCCode: string
  userCode: string
  goodsCode: string
  points: number
  num: number
  keyCode: string
  createTime: string
  state: string
}

// 消费者信息
export type customer = {
  // {
  //   "userCode": "002b746c-6536-4660-8dd9-1dfb2e5ee5c9",
  //   "maxMissionsDaily": 49,
  //   "nowMissionsNum": 9,
  //   "sumMissions": 3,
  //   "uncompleteMissionsNum": 683,
  //   "maxPointsDaily": 4065,
  //   "nowPoints": 3579,
  //   "sumPoints": 346192,
  //   "maxConsumePointsDaily": 64880,
  //   "nowConsumePoints": 4740,
  //   "completeRate": 1.755,
  //   "inviterCode": "va3dsRXTi"
  // }
  userCode: string
  maxMissionsDaily: number
  nowMissionsNum: number
  sumMissions: number
  uncompleteMissionsNum: number
  maxPointsDaily: number
  nowPoints: number
  sumPoints: number
  maxConsumePointsDaily: number
  nowConsumePoints: number
  completeRate: number
  inviterCode: string
}

// 用户信息
export type user = {
  // "userCode": "002b746c-6536-4660-8dd9-1dfb2e5ee5c9",
  // "loginCode": "7d45d4e3-54fe-4ce6-a1f9-3a14c1a860a8",
  // "userName": "陆哲",
  // "password": null,
  // "wxOpenid": "0VOaDuFWD84-",
  // "mgrType": "1",
  // "status": "3",
  // "email": "xmvqnzflm@dmstest.com.cn",
  // "mobile": "19935838328",
  // "sex": "1",
  // "avatar": "https://picture.gaocimi.cn/static/avatar.jpg",
  // "points": 911,
  // "sign": "个性签名",
  // "lastLoginIp": "134.225.143.59",
  // "lastLoginDate": 1512189188000,
  // "freezeCause": "冻结原因",
  // "freezeDate": 1430757107000,
  // "createBy": "",
  // "createDate": 1268370854000,
  // "updateBy": null,
  // "updateDate": 1472749550000,
  // "remarks": "备注信息",
  // "extendS1": null,
  // "extendS2": null,
  // "extendI1": null,
  // "extendI2": null,
  // "extendF1": null,
  // "extendF2": null,
  // "extendD1": null,
  // "extendD2": null
  userCode: string
  loginCode: string
  userName: string
  password: string
  wxOpenid: string
  mgrType: string
  status: string
  email: string
  mobile: string
  sex: string
  avatar: string
  points: number
  sign: string
  lastLoginIp: string
  lastLoginDate: string
  freezeCause: string
  freezeDate: string
  createBy: string
  createDate: string
  updateBy: string
  updateDate: string
  remarks: string
}

export type question = {
  // {
  //   "questionsCode": "fcaf1be4-702d-4104-b0a8-9005493d646e",
  //   "projectsCode": "7bff4e7d-d059-43a3-a9a1-3ce14316b9c0",
  //   "missionsCode": "7a8927ab-f204-483d-a74a-774985e5a84f",
  //   "title": "题目标题",
  //   "questionsType": "1",
  //   "questionsOptions": "#A.A选项 #B.B选项#C.C选项 #D.D选项",
  //   "claim": "题目要求",
  //   "questionsIndex": 3,
  //   "url": "https://picture.gaocimi.cn/static/question.jpg",
  //   "mintime": 3
  // }
  questionsCode: string
  projectsCode: string
  missionsCode: string
  title: string
  questionsType: string
  questionsOptions: string
  claim: string
  questionsIndex: number
  url: string
  mintime: number
}

// 答案信息
export type answer = {
  answersCode: string
  missionCode: string
  userCode: string
  questionCode: string
  createTime: string
  answers: string
  status: string
  goals: 0
}
