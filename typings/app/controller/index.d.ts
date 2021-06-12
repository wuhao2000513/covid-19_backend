// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportCommonCtr = require('../../../app/controller/commonCtr');
import ExportHotspotCtr = require('../../../app/controller/hotspotCtr');
import ExportNewsNewsCtr = require('../../../app/controller/news/newsCtr');
import ExportUserUserCtr = require('../../../app/controller/user/userCtr');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    commonCtr: ExportCommonCtr;
    hotspotCtr: ExportHotspotCtr;
    news: {
      newsCtr: ExportNewsNewsCtr;
    }
    user: {
      userCtr: ExportUserUserCtr;
    }
  }
}
