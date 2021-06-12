// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHotspot = require('../../../app/model/hotspot');
import ExportNews = require('../../../app/model/news');
import ExportRecord = require('../../../app/model/record');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Hotspot: ReturnType<typeof ExportHotspot>;
    News: ReturnType<typeof ExportNews>;
    Record: ReturnType<typeof ExportRecord>;
    User: ReturnType<typeof ExportUser>;
  }
}
