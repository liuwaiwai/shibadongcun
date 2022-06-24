// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad(){
    this.getData()
  },

  getData(){
    var that = this;
    wx.cloud.database().collection('fengjing').get({
      success(res){
        // console.log(res)
        var viewList = res.data
        that.setData({
          viewList:viewList
        })
      }
    })
    wx.cloud.database().collection('meishi').get({
      success(res){
        // console.log(res)
        var foodList = res.data
        that.setData({
          foodList:foodList
        })
      }
    })
    wx.cloud.database().collection('productList').get({
      success(res){
        // console.log(res)
        var productList = res.data
        that.setData({
          productList:productList
        })
      }
    })
    wx.cloud.database().collection('traditionList').get({
      success(res){
        // console.log(res)
        var traditionList = res.data
        that.setData({
          traditionList:traditionList
        })
      }
    })
  },
  goTweets: function (e) {
    var id = e.currentTarget.dataset.item._id;  // 获取点击的推文的数组下标
    
    var url = e.currentTarget.dataset.item.url;  // 通过id判断是哪个推文的链接
    //跳转并传参
    console.log(e.currentTarget.dataset.item.url)
    console.log(url)
    let toUrl = url.toString()
    console.log( encodeURIComponent(toUrl))
    wx.navigateTo({
      url: '/pages/tuiwenOne/tuiwenOne?url=' +encodeURIComponent(toUrl),
    })
  },
  fangyi(){
    wx.navigateTo({
      url: '/pages/fangyi/fangyi',
    })
  },
  goStory1(){
    wx.navigateTo({
      url: '/pages/guoqu/guoqu',
    })
  },
  goStory2(){
    wx.navigateTo({
      url: '/pages/zhanpin/zhanpin',
    })
  },
  goStory3(){
    wx.navigateTo({
      url: '/pages/xianzai/xianzai',
    })
  },
  goStory4(){
    wx.navigateTo({
      url: '/pages/weilai/weilai',
    })
  }
})
