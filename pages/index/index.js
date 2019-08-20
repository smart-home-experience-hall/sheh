//index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../image/bg1.jpg',
      '../image/bg2.jpg',
      '../image/bg3.jpg',
      '../image/bg4.jpg',
    ],
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页',
    })
    this.getData()
  },
  getData() {
    wx.request({
      url: 'http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?&page=1&size=20',
      header: {
        "content-type": "application/json"
      },
      success: res => {
        console.log(res.data.goods_list);
        this.setData({
          dataList: res.data.goods_list
        })
      },
    })
  },
  goto(){
    wx.navigateTo({
      url: '../details/details'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
