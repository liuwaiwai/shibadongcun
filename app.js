// app.js
App({
  onLaunch() {
    //云开发环境初始化
    wx.cloud.init({
      env:"gogogo-1gx7bgms7c34f0c4",
    })
  },
  globalData: {
    userInfo:null,
    userName: null
  }
})
