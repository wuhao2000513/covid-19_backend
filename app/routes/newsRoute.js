'use strict';
// 用户路由
module.exports = (router, controller) => {
  router.resources('news', '/news', controller.news.newsCtr);
};
