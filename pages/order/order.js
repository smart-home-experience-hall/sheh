// pages/order/order.js
import Dialog from 'vant-weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    TotalCost: 0,
    show: false,
    name: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getdata();
    
  },
  // 获取数据
  getdata() {
    let data = wx.getStorageSync("data");
    console.log(data.data)
    let list = data.data.filter(item => {
      return item.check == true
    });
    console.log(list)
    this.setData({
      data: list,
      TotalCost: data.TotalCost
    })
  },
  Settlement(){
    this.setData({
      show: !this.data.show
    })
  },
  // 模态框
  onClose(){
    this.setData({
      show: false
    })
  },
  // 获取用户信息
  onGotUserInfo: function (e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    this.setData({
      name: e.detail.userInfo.nickName
    })
    // console.log(e.detail.rawData)
  },
  // 确认支付
  confirm(){
    Dialog.confirm({
      title: '确认支付',
      message: '是否确认支付'
    }).then(() => {
      console.log(1)
      // wx.navigateTo({
      //   url: ""
      // })
    }).catch(() => {
      // on cancel
      console.log(2)
    });
  },
})