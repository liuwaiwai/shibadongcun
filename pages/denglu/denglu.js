
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data:{
    // userInfo: "",
    // nickName : "",
    // avatarUrl : "",
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  getInfo(){
    // console.log(e)
    // console.log(e.detail.userInfo)
    var that = this;
    wx.getUserProfile({

      desc: '获取用户信息', 
      success(res){
        // console.log(res)
        
        var nickName = res.userInfo.nickName
        var avatarUrl = res.userInfo.avatarUrl
        that.setData({
          nickName : nickName,
          avatarUrl : avatarUrl,
        })
        wx.setStorageSync('userInfo', res.userInfo)
        app.globalData.userInfo = res.userInfo
        app.globalData.userName=res.userInfo.nickName
        // console.log("1")
        // console.log(app.globalData.userName)
        wx.navigateBack({
          success(res){
            wx.showToast({
              title: '授权成功',
            })
          }
        })

      }
    })

  }

})