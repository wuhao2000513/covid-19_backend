'use strict';

const Service = require('egg').Service;

class HotspotSrvService extends Service {
  async get(paging) {
    const HotspotModel = this.ctx.model.Hotspot;
    return await HotspotModel.findAndCountAll(paging);
  }
  async add(data) {
    const HotspotModel = this.ctx.model.Hotspot;
    return await HotspotModel.create(data);
  }
}

module.exports = HotspotSrvService;
