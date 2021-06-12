'use strict';
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
module.exports = {
  /**
     * 密码加密
     * @param {string} pwd 需要加密的密码
     */
  crypto(pwd) {
    const salt = this.app.config.salt;
    const hmac = crypto.createHmac('sha1', salt);
    hmac.update(pwd);
    return hmac.digest('hex');
  },
  /**
   * 生成jwt Token
   * @param {object} data 需要加入jwt加密中的数据
   */
  signToken(data) {
    const config = this.app.config.jwt;
    return jwt.sign(data, config.secret, { expiresIn: config.exp });
  },
  /**
   * 验证jwt Token
   * @param {string} token jsonwebtoken生成的token
   * @return {object} 解开token后的对象
   */
  verifyToken(token) {
    const secret = this.app.config.jwt.secret;
    return jwt.verify(token, secret);
  },
  /**
   * 根据路径创建文件夹
   */
  // 递归创建目录 同步方法
  mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
      return true;
    }
    if (this.mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  },
};
