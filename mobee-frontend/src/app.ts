/******************************************************************
MIT License http://www.opensource.org/licenses/mit-license.php
Author Mora <qiuzhongleiabc@126.com> (https://github.com/qiu8310)
*******************************************************************/

import { appify, MyApp, MyStore, wxp } from 'base/'

@appify(new MyStore(), {
  pages: require('./app.cjson?pages'),
  tabBarList: require('./app.cjson?tabBar.list')
})
export default class extends MyApp {
  async onLaunch() {
    // 展示本地存储能力
    // let logs = wxp.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wxp.setStorageSync('logs', logs)

    // 登录
    const { code } = await wxp.login()
    console.log('微信 code %o', code) // 发送 code 到后台换取 openId, sessionKey, unionId
  }
}
