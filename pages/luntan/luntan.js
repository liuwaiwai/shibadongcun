
// 获取应用实例
const app = getApp()

const util = require("../../utils/util")

Page({
  data: {
    userInfo:'' 
  },

  onLoad: function() {
    this.getDongtaiList();
    // var userInfo = wx.getStorageSync('userInfo');
    // this.setData({userInfo:userInfo});
  },

  getDongtaiList(){
    var that = this
    wx.cloud.database().collection('dongtai').orderBy('time','desc').get({
      success(res){
        // console.log(res)
        //格式化时间
        var list = res.data
        // console.log(list)
        for(var i in list){
          list[i].time=util.formatTime(new Date(list[i].time))
        }

        that.setData({
          dongtaiList:list
        })
      }
    })
  },

  toFabu(){
    app.globalData.userName=this.data.userInfo.nickName
    console.log(this.data.userInfo)
    if(app.globalData.userName == null){
      wx.navigateTo({
        url: '/pages/denglu/denglu',
      })
    }else{
      wx.navigateTo({
        url: '/pages/dongtai/dongtai',
      })
    }
  },

  onPullDownRefresh(){
    this.getDongtaiList()
  },

  onShow(){
    this.getDongtaiList();
    var userInfo = wx.getStorageSync('userInfo');
    this.setData({userInfo:userInfo});
  }
})
