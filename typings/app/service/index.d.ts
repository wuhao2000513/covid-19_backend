// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCommonSrv = require('../../../app/service/commonSrv');
import ExportHotspotSrv = require('../../../app/service/hotspotSrv');
import ExportNewsSrv = require('../../../app/service/newsSrv');
import ExportUserSrv = require('../../../app/service/userSrv');

declare module 'egg' {
  interface IService {
    commonSrv: AutoInstanceType<typeof ExportCommonSrv>;
    hotspotSrv: AutoInstanceType<typeof ExportHotspotSrv>;
    newsSrv: AutoInstanceType<typeof ExportNewsSrv>;
    userSrv: AutoInstanceType<typeof ExportUserSrv>;
  }
}
