Page({

  data: {
    images: [
      "/assets/images/demo-1.jpg",
      "/assets/images/demo-2.jpg",
      "/assets/images/demo-3.jpg"
    ]
  },
  onLoad() {
    console.log('页面加载')
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
  }
})
