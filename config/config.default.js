'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  // 用户密码加盐值
  config.salt = 'd#5$_dtx';

  // 中间件
  config.middleware = [/* 'cors'*/ 'permission']; // 默认关闭cors
  // 中间件配置
  const middlewareConfig = {
    permission: {
      // 忽略以下请求地址的验证
      ignore(ctx) {
        if (ctx.path === '/') {
          return true;
        }
        return /^\/public|^\/static|^\/signin|^\/signup|^\/signout&|^\/getCaptcha|^\/test/.test(ctx.path);
      },
    },
  };
  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };
  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: '42.192.90.48',
    port: 3306,
    database: 'covid',
    username: 'covid',
    password: 'covid',
    define: {
      freezeTableName: true,
    },
    sync: {
      alter: true,
    },
    timezone: '+08:00',
  };
  // jwt 配置
  config.jwt = {
    secret: 'e-stu',
    exp: '1 day', // jwt过期时间
  };
  return {
    ...config,
    ...middlewareConfig,
  };
};
