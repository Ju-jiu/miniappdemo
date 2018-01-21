App({
  onLaunch(options) {
    console.log('初始化。小程序初始化以后被执行')
    console.log(options)
  },
  onShow(options) {
    console.log('显示。小程序启动以后，从后台进入到前台后被执行')
    console.log(options)
  },
  onHide() {
    console.log('隐藏。小程序从前台进入到后台后被执行')
  },
  onError(error) {
    console.log('error')
  },
  globalData: {
    greeting: [
      'hello ~',
      'hola ~',
      '你好 ~'
    ]
  }
})
