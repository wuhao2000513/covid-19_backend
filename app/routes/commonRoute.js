'use strict';

module.exports = (router, controller) => {
  // 测试接口
  router.get('/test', controller.commonCtr.test);
  // 获取验证码
  router.get('/getCaptcha', controller.commonCtr.getCaptcha);
  // 登录
  router.post('/signin', controller.commonCtr.signin);
  // 注册
  router.post('/signup', controller.commonCtr.signup);
  // 登出
  router.post('/signout', controller.commonCtr.signout);
  // 上传图片接口
  // router.post('/upload', controller.commonCtr.upload);

  /* 业务接口 */
  router.resources('hotspot', '/hotspot', controller.hotspotCtr);
};
