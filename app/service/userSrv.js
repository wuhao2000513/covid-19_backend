'use strict';

const Service = require('egg').Service;

class UserSrvService extends Service {
  /**
   * 查询账号
   * @param {object} condition 查询条件 where
   */
  async getUser(condition) {
    const UserModel = this.ctx.model.User;
    return await UserModel.findAndCountAll(condition);
  }
  /**
   * 新建账号
   * @param {object} userInfo 创建账号信息
   * @return {boolean} created 返回是否创建成功
   */
  async crateAccount(userInfo) {
    const UserModel = this.ctx.model.User;
    const [ , created ] = await UserModel.findOrCreate({
      where: {
        username: userInfo.username,
      },
      defaults: userInfo,
    });
    return created;
  }
  /**
   * 更新账号
   * @param {number} id 要更新的账号ID
   * @param {object} info 要更新的字段json
   */
  async updateAccount(id, info) {
    const UserModel = this.ctx.model.User;
    return await UserModel.update(info, {
      where: {
        id,
      },
    });
  }
}

module.exports = UserSrvService;
