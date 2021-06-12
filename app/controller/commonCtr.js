'use strict';

const Controller = require('./base');
const captcha = require('svg-captcha');
// const path = require('path');
// const { createWriteStream } = require('fs');
// const dayjs = require('dayjs');
// 导入图片处理模块
// const sharp = require('sharp');

class CommonController extends Controller {
  // 测试接口(非业务接口)
  test() {
    const { ctx, app } = this;
    ctx.body = ctx;
  }
  /**
   * 获取验证码
   */
  getCaptcha() {
    const { ctx } = this;
    const { width, height } = ctx.query;
    const svg = captcha.create({ color: true, width, height });
    // ctx.session.captch = svg.text;
    this.send(svg.data);
  }
  /**
   * 登录
   */
  async signin() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    // 查询数据库
    const userInfo = await service.commonSrv.login(username, password);
    // 登录成功 签发token
    if (userInfo) {
      // 账号状态正常
      if (userInfo.state === 0) {
        // 生成token
        const token = ctx.helper.signToken({ username });
        ctx.cookies.set('token', token, {
          httpOnly: false,
        });
        // 发送
        this.send(userInfo);
      } else {
        // 账号状态异常
        ctx.throw(403);
      }
    } else {
      ctx.throw(404);
    }
  }
  /* 注册 */
  async signup() {
    const { ctx, service } = this;
    const { username, password, role } = ctx.request.body;
    // 查询数据库
    const userInfo = await service.commonSrv.register({ username, password, role });
    this.send(userInfo);
  }
  /**
   * 登出
   */
  signout() {
    this.send(null, '退出登录成功');
  }

  /**
 * 图片上传
 */
  // async upload() {
  //   const { ctx } = this;
  //   const stream = await ctx.getFileStream();
  //   const filename = Date.now() + '_' + path.basename(stream.filename);
  //   // static 插件配置
  //   const staticConfig = this.config.static;
  //   // 目录名称采用文件夹+日期的形式
  //   const date = dayjs().format('YYYY-MM');
  //   const fileDir = path.join(staticConfig.prefix, 'upload', date);
  //   const uploadDir = path.join(this.config.baseDir, 'app', fileDir);
  //   // 创建文件夹
  //   ctx.helper.mkdirsSync(uploadDir);
  //   try {
  //     // 拿到设置的宽度
  //     const width = ctx.request.body.width;
  //     // 创建图片转换流对象
  //     const transformer = sharp().resize(width || 750);
  //     // readableStream.pipe(transformer).pipe(writableStream);
  //     const ws = createWriteStream(path.join(uploadDir, filename));
  //     await new Promise((resolve, reject) => {
  //       stream.pipe(transformer).pipe(ws);
  //       ws.on('finish', resolve);
  //       ws.on('error', reject);
  //     });
  //     this.send(`${staticConfig.prefix}upload/${date}/${filename}`);
  //   } catch (error) {
  //     ctx.throw(403, error.message);
  //   }
  // }
}

module.exports = CommonController;
