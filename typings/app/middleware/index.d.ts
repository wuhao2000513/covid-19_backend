// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCors = require('../../../app/middleware/cors');
import ExportPermission = require('../../../app/middleware/permission');

declare module 'egg' {
  interface IMiddleware {
    cors: typeof ExportCors;
    permission: typeof ExportPermission;
  }
}
