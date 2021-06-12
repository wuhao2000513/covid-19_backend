'use strict';

const Service = require('egg').Service;

class NewsSrvService extends Service {
  /**
   * 获取新闻
   * @param {Object} condition 查询条件
   * @return {Array} 包含分页统计的数组
   */
  async getNews(condition) {
    const NewsModel = this.ctx.model.News;
    return await NewsModel.findAndCountAll(condition);
  }
  /**
   * 插入一条新闻
   * @param {Object} data 新闻描述对象
   * @return {Object} 插入成功后的数据对象
   */
  async addNews(data) {
    const NewsModel = this.ctx.model.News;
    return await NewsModel.create(data);
  }
  /**
   * 更新一条新闻
   * @param {String} id 新闻ID
   * @param {Object} data 新闻描述对象
   * @return {Object} 更新成功后mysql返回对象
   */
  async updateNews(id, data) {
    const NewsModel = this.ctx.model.News;
    return await NewsModel.update(data, {
      where: { id },
    });
  }
}

module.exports = NewsSrvService;
