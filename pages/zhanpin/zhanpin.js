Page({
  data: {
    startX: 0,
    endX: 0,
    iCenter: 3,
    datas: [{
      id: 1,
      zIndex: 4,
      opacity: 0.6,
      left: -45,
      iamge: "cloud://gogogo-1gx7bgms7c34f0c4.676f-gogogo-1gx7bgms7c34f0c4-1311984038/story/2.3.png",
      animation: null
    },
    {
      id: 2,
      zIndex: 6,
      opacity: 0.8,
      left: -5,
      iamge: "cloud://gogogo-1gx7bgms7c34f0c4.676f-gogogo-1gx7bgms7c34f0c4-1311984038/story/2.4.png",
      animation: null
    },
    {
      id: 3,
      zIndex: 8,
      opacity: 1,
      left: 35,
      iamge: "cloud://gogogo-1gx7bgms7c34f0c4.676f-gogogo-1gx7bgms7c34f0c4-1311984038/story/2.0.png",
      animation: null
    },
    {
      id: 4,
      zIndex: 6,
      opacity: 0.8,
      left: 75,
      iamge: "cloud://gogogo-1gx7bgms7c34f0c4.676f-gogogo-1gx7bgms7c34f0c4-1311984038/story/2.1.png",
      animation: null
    },
    {
      id: 5,
      zIndex: 4,
      opacity: 0.6,
      left: 115,
      iamge: "cloud://gogogo-1gx7bgms7c34f0c4.676f-gogogo-1gx7bgms7c34f0c4-1311984038/story/2.2.png",
      animation: null
    },


    //   id: 1,
    //   zIndex: 2,
    //   opacity: 0.2,
    //   left: -100,
    //   iamge: "/static/十八梯田.jpg",
    //   animation: null
    // },
    // {
    //   id: 2,
    //   zIndex: 4,
    //   opacity: 0.4,
    //   left: -60,
    //   iamge: "/static/十八洞村.jpg",
    //   animation: null
    // },
    // {
    //   id: 3,
    //   zIndex: 6,
    //   opacity: 0.6,
    //   left: -20,
    //   iamge: "/static/十八溶洞.jpg",
    //   animation: null
    // },
    // {
    //   id: 4,
    //   zIndex: 8,
    //   opacity: 1,
    //   left: 22,
    //   iamge: "/static/1.png",
    //   animation: null
    // },
    // {
    //   id: 5,
    //   zIndex: 6,
    //   opacity: 0.6,
    //   left: 60,
    //   iamge: "/static/更多风景.jpg",
    //   animation: null
    // },
    // {
    //   id: 6,
    //   zIndex: 4,
    //   opacity: 0.4,
    //   left: 100,
    //   iamge: "/static/村展陈馆.jpg",
    //   animation: null
    // },
    // {
    //   id: 7,
    //   zIndex: 2,
    //   opacity: 0.2,
    //   left: 140,
    //   iamge: "/static/高名山庄.jpg",
    //   animation: null
    // },
    ],
    order: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.__set__();
    this.move();
  },

  move: function () {
    var datas = this.data.datas;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas[" + i + "].animation"]: animation.export(),
        ["datas[" + i + "].zIndex"]: data.zIndex,
        ["datas[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  /**左箭头 */
  left: function () {
    //
    var last = this.data.datas.pop(); //获取数组的最后一个
    this.data.datas.unshift(last);//放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move();
  },
  /** */
  right: function () {
    var first = this.data.datas.shift(); //获取数组的第一个
    this.data.datas.push(first);//放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move();
  },
  /**点击某项 */
  choose: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order = that.data.order;
    var index = 0;
    for (var i = 0; i < order.length; i++) {
      if (id == order[i]) {
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas.push(this.data.datas.shift()); //获取第一个放到最后一个
        this.data.order.unshift(this.data.order.pop());
        // this.right()  
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas.unshift(this.data.datas.pop()); //获取最后一个放到第一个
        this.data.order.push(this.data.order.shift());
        // this.left();
      }
    }
    this.move();
  },
  /**新的排列复制到新的数组中 */
  __set__: function () {
    var that = this;
    var order = that.data.order;
    var datas = that.data.datas;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order[" + i + "]"]: datas[i].id
      })
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    console.log(e);
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    console.log(e);
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });
    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;
    //向左移动
    if (moveX > 20) {
      this.left();
    }
    if (moveX < -20) {
      this.right();
    }
  },
})