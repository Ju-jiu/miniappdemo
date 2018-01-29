import helper from '../../libs/helper/helper'
const app = getApp()

Page({
  data: {
    greeting: '',
    items: [
      {
        name: '中国',
        value: 'CN'
      },
      {
        name: '泰国',
        value: 'TH'
      },
      {
        name: '日本',
        value: 'JP'
      },
    ],
    pickers: [
      '中国',
      '泰国',
      '日本'
    ],
    pick: '09:00'
  },
  // tapGreeting(event) {
  //   console.log(event)
  //   this.setData({
  //     greeting: helper.randItem(app.globalData.greeting)
  //   })
  // },
  formSubmit(event) {
    console.log(event.detail.value)
  },

  inputHandler(event) {
    this.setData({
      pick: event.detail.value
    })
    console.log(event.detail.value)
  },

  onLoad() {
    console.log('页面加载')
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })
  },
  onShow() {
    console.log('页面显示')
  },
  onReady() {
    console.log('页面首次渲染后执行')
  },
  onHide() {
    console.log('页面隐藏')
  },
  onUnload() {
    console.log('页面卸载')
  },
  onPullDownRefresh() {
    console.log('页面下拉刷新')
  },
  onReachBottom() {
    console.log('页面到底儿了')
  },
  onPageScroll(caculations) {
    console.log(caculations)
  }
})
