'use strict';
// 用户表
module.exports = app => {
  const Sequelize = app.Sequelize;
  const { STRING, TINYINT, ENUM } = Sequelize;

  const User = app.model.define('user', {
    username: {
      type: STRING(20),
      unique: 'column',
      validate: {
        len: [5, 20],
      },
      comment: '用户名',
    }, // 用户名
    password: {
      type: STRING(64),
      allowNull: false,
      comment: '用户密码',
    },
    avatar: {
      type: STRING,
      comment: '用户头像URL',
      defaultValue: '/public/defalut-avatar.png',
    },
    role: {
      type: ENUM('admin', 'user', 'owner'),
      defaultValue: 'user',
    },
    state: {
      type: TINYINT.UNSIGNED,
      defaultValue: 0,
      comment: '账户状态(0正常,1警告,2停用)',
    },
  });
  return User;
};
