'use strict';

const Controller = require('./base');

class HotspotCtrController extends Controller {
  async index() {
    const { service, ctx } = this;
    const paging = this.paging();
    const res = await service.hotspotSrv.get(paging);
    this.send(res);
  }
  async create() {
    const { service, ctx } = this;
    const body = ctx.request.body;
    const res = await service.hotspotSrv.add(body);
    this.send(res);
  }
}

module.exports = HotspotCtrController;
