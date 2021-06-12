'use strict';

const Controller = require('../base');

class NewsCtrController extends Controller {
  async index() {
    const { ctx, service } = this;
    const query = ctx.request.query;
    // 确定分页
    const condition = {
      ...this.paging(),
      order: [['createdAt', 'desc']],
    };
    const res = await service.newsSrv.getNews(condition);
    this.send(res);
  }
  async create() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const res = await service.newsSrv.addNews(body);
    this.send(res);
  }
  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const query = ctx.request.body;
    const res = await service.newsSrv.updateNews(id, query);
    this.send(res);
  }
}

module.exports = NewsCtrController;
