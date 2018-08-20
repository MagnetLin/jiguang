import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '主页内容管理',
    // navigationBarTextStyle: 'white',
    // enablePullDownRefresh: true,
    // backgroundTextStyle: 'light'
  }
}