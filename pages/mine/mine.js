// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      // const user = wx.getStorageSync('userInfo')
      //   this.setData({
      //     userInfo:user
      //   })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      const userInfo = wx.getStorageSync("userInfo")
      this.setData({userInfo})
    },

    toDenglu(){
      wx.navigateTo({
        url: '/pages/denglu/denglu',
      })
    },

    // 退出登录，清除数据函数
    clear:function(){
      this.setData({
          userinfo:""
      })
      wx.clearStorageSync('userinfo','')
      wx.showToast({
        title: '退出登陆成功',
        duration:2000,
      //   成功后跳转首页
        success:function(){
            setTimeout(function(){
                wx.reLaunch({
                  url: '/pages/index/index',
                })
            },2000)
        }
      })
    },


    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})