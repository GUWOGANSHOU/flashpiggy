import { wxp } from '.'
import * as ResponseType from './ResponseType'

// const API_ENDPOINT = 'https://mobee.gaocimi.cn/api-client/'
const API_ENDPOINT = 'https://mobee.gaocimi.cn:8762/'
export class API {
  static async baseRequest<T>(
    path: string,
    others?: Pick<wxp.request.Param, Exclude<keyof wxp.request.Param, 'url'>>
  ) {
    return wxp
      .request({
        url: API_ENDPOINT + path,
        ...others
      })
      .then(({ data, statusCode, header }) => {
        const res = data as ResponseType.ResponseData<T>
        if (statusCode !== 200 || res.code !== 10000) {
          wxp.hideLoading()
          wxp.showToast({
            title: '系统错误，请重试',
            icon: 'none'
          })
          console.log(data)
          throw data
        }
        return res.data
      })
  }

  static async request<T>(
    path: string,
    others?: Pick<wxp.request.Param, Exclude<keyof wxp.request.Param, 'url'>>,
    mask = true
  ) {
    wxp.showLoading({
      title: '',
      mask
    })
    return this.baseRequest<T>(path, others).then(data => {
      wxp.hideLoading()
      return data
    })
  }

  static async getMissionAll(param?: {
    pageNum?: number
    pageSize?: number
    orderBy?: 'missions_code desc' | 'missions_code asc'
  }) {
    return this.request<ResponseType.mission[]>('missions', { data: param })
  }

  static async getMissionById(id: string) {
    return this.request<ResponseType.mission>(`mission/${id}`)
  }

  // 成就开始========================================================================================
  // 获取当前成就列表
  static async getAchievementAll(param?: {
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.achievement[]>('achievement', {
      data: param,
      method: 'get'
    })
  }

  // 已达成成就列表及记录
  static async getAchievementAndUserCodeById(param: {
    usercode: string
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<{
      Achievements: ResponseType.achievement[]
      RecordAchievementConsumers: ResponseType.recordAchievementConsumer[]
    }>(`achievement/usercode/${param.usercode}/`, {
      data: param,
      method: 'get'
    })
  }

  // 根据成就id获取成就
  static async getAchievementById(id: string) {
    return this.request<ResponseType.achievement>(`achievement/${id}`)
  }

  // 达成成就
  static async addRecoreAchievementAndUserCode(param: {
    achievementId: string
    usercode: string
  }) {
    return this.request<string>(
      `achievement/${param.achievementId}/usercode/${param.usercode}`,
      { data: param, method: 'post' }
    )
  }

  // 商品开始========================================================================================
  // 获取当前商品列表
  static async getGoodAll(param?: {
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.good[]>('good', {
      data: param,
      method: 'get'
    })
  }

  // 已消费商品列表及记录
  static async getgoodAndUserCodeById(param: {
    usercode: string
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<{
      goods: ResponseType.good[]
      RecordgoodConsumers: ResponseType.recordGoodsConsumer[]
    }>(`good/usercode/${param.usercode}/`, { data: param, method: 'get' })
  }

  // 根据成就id获取商品
  static async getgoodById(id: string) {
    return this.request<ResponseType.good>(`good/${id}`)
  }

  // 兑换商品
  static async addRecoregoodAndUserCode(param: {
    goodId: string
    usercode: string
  }) {
    return this.request<string>(
      `good/${param.goodId}/usercode/${param.usercode}`,
      { data: param, method: 'post' }
    )
  }

  // 任务开始========================================================================================
  // 获取当前最近任务列表
  static async getmissionAll(param?: {
    longitude: number
    latitude: number
    distance: number
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.mission[]>('missions', {
      data: param,
      method: 'get'
    })
  }

  // 获取当前最近任务-所属项目列表详情 GET /missions/missions-project
  static async getProjectMissionleast(param: {
    longitude: number
    latitude: number
    distance: number
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.project[]>(`missions/missions-project`, {
      data: param,
      method: 'get'
    })
  }

  // 放弃任务 PUT /missions/{missionId}/recordcode/{recordcode}/
  static async giveupmissionById(param: {
    missionId: string
    recordcode: string
  }) {
    return this.request<string>(
      `missions/${param.missionId}/recordcode/${param.recordcode}/`,
      { data: param, method: 'put' }
    )
  }

  // GET /missions/{missionId}/usercode/{usercode} 查看已接受任务列表
  static async getMissionListByUserId(param: {
    usercode: string
    missionId: string // 可任意但不为空
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.recordMissionsConsumer>(
      `missions/${param.missionId}/usercode/${param.usercode}`,
      { data: param, method: 'get' }
    )
  }

  // 开始当前任务
  static async addRecoreMissionAndUserCode(param: {
    usercode: string
    missionId: string
  }) {
    return this.request<string>(
      `missions/${param.missionId}/usercode/${param.usercode}`,
      { data: param, method: 'post' }
    )
  }

  // 放弃当前任务
  static async updateRecoreMissionAndUserCode(param: {
    usercode: string
    missionId: string
  }) {
    return this.request<string>(
      `missions/${param.missionId}/usercode/${param.usercode}`,
      { data: param, method: 'put' }
    )
  }

  // 题目开始========================================================================================
  // GET /question/{missionId} 获取当前任务题目列表
  static async getQuestionAll(param: {
    missionId: string
    pageNum?: number
    pageSize?: number
    orderBy?: string
  }) {
    return this.request<ResponseType.question[]>(
      `question/${param.missionId}`,
      { data: param, method: 'get' }
    )
  }

  // 用户开始========================================================================================
  // POST /user 创建用户
  static async addUser(user: ResponseType.user) {
    return this.request<string>(`user`, { data: user, method: 'post' })
  }

  // PUT /user 更新用户
  static async updateUser(user: ResponseType.user) {
    return this.request<string>(`user`, { data: user, method: 'put' })
  }

  // GET /user/_check/username 用户名查重
  static async validUserName(userName: string) {
    return this.request<string>(`user/_check/username`, {
      data: userName,
      method: 'get'
    })
  }

  // GET /user/{userId}/customer 获取客户customer信息
  static async getCustomerById(userId: string) {
    return this.request<ResponseType.customer>(`user/${userId}/customer`)
  }

  // GET /user/{userId}/info 获取用户详细信息user
  static async getUserById(userId: string) {
    return this.request<ResponseType.user>(`user/${userId}/info`)
  }

  // PUT /user/{userId}/invitercode/{code} 设置客户邀请码
  static async setUserInvitercode(param: { userId: string; code: string }) {
    return (
      this.request<ResponseType.user>(
        `user/${param.userId}/invitercode/${param.code}`
      ),
      { data: param, method: 'put' }
    )
  }

  // 答案开始========================================================================================
  // POST /answer/_mcreate 提交当前任务题目答案列表
  static async addRecoreAnswersAndUserCode(param: {
    list: ResponseType.answer[]
  }) {
    return this.request<string>(`answer/_mcreate`, {
      data: param,
      method: 'post'
    })
  }
}
