// jwt 验证中间件
'use strict';

module.exports = () => {
  return async function (ctx, next) {
    // 拿到传会数据的header 中的token值
    const token = ctx.cookies.get('token');
    if (!token) {
      return ctx.throw(401, '未登录， 请先登录');
    }
    // 当前token值存在
    try {
      // 验证当前token
      const decode = ctx.helper.verifyToken(token);
      const Username = decode.username;
      if (!decode || !Username) {
        return ctx.throw(401, '没有权限，请登录');
      }
      const expireTime = parseInt((Date.now() / 1000)) - decode.exp;
      if (expireTime > 0) {
        return ctx.throw(401, 'Token已过期');
      }
      // 把用户名保存到ctx对象上方便业务上使用
      ctx.state.username = Username;
      // 如果token过期时间小于5分钟 重新签发token
      if (Math.abs(expireTime) < 60 * 5) {
        const Token = ctx.helper.signToken({
          username: Username,
        });
        ctx.cookies.set('token', Token, {
          httpOnly: false,
        });
      }
    } catch (e) {
      return ctx.throw(401);
    }
    await next();
  };
};
