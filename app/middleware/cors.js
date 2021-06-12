'use strict';

module.exports = () => {
  return async (ctx, next) => {
    // 设置允许跨域请求
    const Method = ctx.method;
    const Origin = ctx.get('origin');
    ctx.set({
      'Access-Control-Allow-Origin': Origin,
      'Access-Control-Expose-Headers': 'Authorization',
      'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Request-Method': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Fetch-Mode,accept,Authorization',
    });
    if (Method === 'OPTIONS') {
      ctx.status = 204;
      ctx.set('Access-Control-Max-Age', 1000);
      return (ctx.body = null);
    }
    await next();
  };
};
