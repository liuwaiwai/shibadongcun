// pages/pingdao/pingdao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toTingche(){
    wx.navigateTo({
      url: '/pages/tingche/tingche',
    })
  },

  toWeishengjian(){
    wx.navigateTo({
      url: '/pages/weishengjian/weishengjian',
    })
  },

  toJingdian(){
    wx.navigateTo({
      url: '/pages/jingdian/jingdian',
    })
  },

  toTianqi(){
    wx.navigateTo({
      url: '/pages/tianqi/tianqi',
    })
  },

  toYanchu(){
    wx.navigateTo({
      url: '/pages/yanchu/yanchu',
    })
  },

  toCunwei(){
    wx.navigateTo({
      url: '/pages/cunwei/cunwei',
    })
  },

  toNongjiale(){
    wx.navigateTo({
      url: '/pages/nongjiale/nonfjiale',
    })
  },

  toMinsu(){
    wx.navigateTo({
      url: '/pages/minsu/minsu',
    })
  }

})