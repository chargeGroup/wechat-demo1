// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  /**
   * 作业：实现一个云函数，传递 a、b 参数，并返回 ab 的和
   * 暗号：less is more
   */
  const { a, b } = event;

  return {
    sum: a + b
  }
}