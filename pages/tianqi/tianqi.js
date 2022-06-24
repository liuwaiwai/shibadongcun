var defaultcity, getweather, gettemp, getwind, getpic, getdate,updata
Page({
  data: {},
  onLoad: function(e) {
    defaultcity = '湘西'
    this.weather()
  },
  bindKeyInput: function(e) {
    defaultcity = e.detail.value
  },
  search: function(e) {
    this.weather()
  },
  weather: function() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://query.asilu.com/weather/baidu?city='+ defaultcity,
      success: res => {
        console.log(res.data)
        
        getweather = res.data.weather[0].weather
        gettemp = res.data.weather[0].temp
        getwind = res.data.weather[0].wind+res.data.weather[0].w
        getdate =  res.data.date
        updata=res.data.update_time
        this.setData({
          city: defaultcity,
          weather: getweather,
          temp: gettemp,
          wind: getwind,
          pic: getpic,
          date: getdate,
          utime:updata
        })
     
        wx.hideLoading()
      }
    })
  }
})