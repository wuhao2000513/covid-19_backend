'use strict';
// 用户路由
module.exports = (router, controller) => {
  router.resources('user', '/user', controller.user.userCtr);
};
