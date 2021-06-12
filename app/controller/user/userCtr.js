'use strict';

const Controller = require('../base');

class UserCtlController extends Controller {
  // 查询账户
  async index() {
    const { ctx, service, app } = this;
    const { username, createdAt, limit, offset } = ctx.query;
    const condition = {
      limit: parseInt(limit),
      offset: (offset - 1) * limit,
      attributes: {
        exclude: [ 'password' ],
      },
    };
    console.log('ctx.queryctx.query', ctx.query);
    // 模糊查询,根据传参生成数据库查询参数
    const { Op } = app.Sequelize;
    const where = {};
    if (username) {
      where.username = {
        [Op.like]: `%${username}%`,
      };
    }
    if (createdAt) {
      where.createdAt = {
        [Op.gte]: createdAt,
      };
    }
    condition.where = where;
    const res = await service.userSrv.getUser(condition);
    this.send(res, '获取用户信息成功');
  }
  // 创建账户
  async create() {
    const { service, ctx } = this;
    const body = ctx.request.body;
    if (body.role !== 1) {
      return ctx.throw(403, '新建账户失败');
    }
    body.password = ctx.helper.crypto(body.password);
    const created = await service.userSrv.crateAccount(body);
    if (created) {
      this.send();
    } else {
      return ctx.throw(403, '账号已存在');
    }
  }
  // 更新账户
  async update() {
    const { ctx, service } = this;
    const info = ctx.request.body;
    delete info.username;
    const res = await service.userSrv.updateAccount(ctx.params.id, info);
    if (res.length > 0) {
      this.send();
    } else {
      ctx.throw(404, '操作失败');
    }
  }
}

module.exports = UserCtlController;

