'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  /**
   * 响应请求
   * @param {any} data 需要发送的数据
   * @param {string} message 提示短语
   * @param {number} status 响应状态码
   */
  send(data, message = '操作成功', status = 200) {
    if (data) {
      this.ctx.body = {
        code: status,
        data,
        message,
      };
    } else {
      this.ctx.status = 204;
      this.ctx.body = null;
    }
  }
  /**
   * 解析get请求中包含的分页信息
   * @return {object} 处理好的分页sql请求(sequelize)
   */
  paging() {
    const { ctx } = this;
    console.log(ctx.method);
    if (ctx.method.toLowerCase() === 'get') {
      const query = ctx.request.query;
      if (!query.pageSize || !query.pageSize) {
        return {};
      }
      // 根据参数生成sequelize 查询条件
      const parser = {
        limit: parseInt(query.pageSize),
        offset: (query.currentPage - 1) * query.pageSize,
      };
      return parser;
    }
    return {};
  }
}

module.exports = BaseController;
