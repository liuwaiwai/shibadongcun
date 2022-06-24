const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cloudImgList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  getValue(e){
    // console.log(e)
    this.setData({
      inputValue:e.detail.value
    })
  },
  chooseImage(){
    var that = this;
    wx.chooseImage({
      count: 3 - that.data.cloudImgList.length,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res){
        console.log(res)
        console.log(res.tempFilePaths)
        //上传图片
        that.data.tempImgList = res.tempFilePaths
        that.uploadImangs()
      }
    })
  },
  uploadImangs(){
    var that = this
    for(var i = 0 ; i<this.data.tempImgList.length; i++){
      wx.cloud.uploadFile({
        cloudPath:`dongtai/${Math.random()}_${Date.now()}.${this.data.tempImgList[i].match(/\.(\w+)$/)[1]}`,
        filePath:this.data.tempImgList[i],
        success(res){
          console.log(res.fileID)
          that.data.cloudImgList.push(res.fileID)
          that.setData({
            cloudImgList:that.data.cloudImgList
          })
        }
      })
    }
  },
  deleteImg(e){
    console.log(e.currentTarget.dataset.index)
    this.data.cloudImgList.splice(e.currentTarget.dataset.index,1)
    this.setData({
      cloudImgList: this.data.cloudImgList
    })
  },
  submitData(){
    wx.cloud.database().collection('dongtai').add({
      data:{
        nickName:app.globalData.userInfo.nickName,
        faceImg:app.globalData.userInfo.avatarUrl,
        text:this.data.inputValue,
        images:this.data.cloudImgList,
        time:Date.now()
      },
      success(res){
        console.log(res)
        wx.navigateBack({
          success(){
            wx.showToast({
              title: '发布成功！',
            })
          }
        })
      }
    })
  }
})