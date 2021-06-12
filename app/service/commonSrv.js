'use strict';

const Service = require('egg').Service;

class CommonSrvService extends Service {
  /**
     *登录
     * @param {string} username 用户名
     * @param {string} password 密码
     */
  async login(username, password) {
    const UserModel = this.ctx.model.User;
    const pwd = this.ctx.helper.crypto(password);
    return await UserModel.findOne({
      where: { username, password: pwd },
      attributes: { exclude: ['password'] },
    });
  }
  /**
     *注册
     * @param {string} username 用户名
     * @param {string} password 密码
     * @param {string} role 角色
     */
  async register({ username, password, role }) {
    console.log('username, password, role', username, password, role);
    const UserModel = this.ctx.model.User;
    const pwd = this.ctx.helper.crypto(password);
    return await UserModel.create({
      username,
      password: pwd,
      role: role || 'user',
    });
  }
}

module.exports = CommonSrvService;
