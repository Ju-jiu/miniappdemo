const app = getApp()

Page({
  data: {
    greeting: app.globalData.greeting
  },
  greet(greeting) {
    return greeting[Math.floor(Math.random() * greeting.length)]
  },
  onLoad() {
    console.log('页面加载')
    this.setData({
      greeting: this.greet(app.globalData.greeting)
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
