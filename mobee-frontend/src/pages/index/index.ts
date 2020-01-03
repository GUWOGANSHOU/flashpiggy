/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import { MyPage, pagify, wxp } from 'base/'

// 把这个 class 转化成 微信的 Page 参数，并且注入全局 store
@pagify()
export default class extends MyPage {
  data = {
    canIUseOpenButton: wxp.canIUse('button.open-type.getUserInfo')
  }

  onClickOpenButton(e: any) {
    if (e.detail.userInfo) {
      // 轻松修改全局数据
      this.store.userInfo = e.detail.userInfo
      this.app.$url.home.redirect()
    } else {
      wxp.showToast({
        title: '请允许授权',
        icon: 'none'
      })
    }
  }

  async onLoad(options: any) {
    // 获取用户信息
    const setting = await wxp.getSetting()
    if (setting.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      // 可以将 getUserInfo 返回的对象发送给后台解码出 unionId
      const res = await wxp.getUserInfo()
      // console.log('微信 userInfo %o', res.userInfo)
      this.store.userInfo = res.userInfo // 将用户信息存入 store 中
      this.app.$url.home.redirect()
    } else {
      // console.log('没有授权过')
      wxp.showToast({
        title: '请登录',
        icon: 'none'
      })
    }
  }
}
