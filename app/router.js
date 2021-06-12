'use strict';
const fs = require('fs');
const path = require('path');
module.exports = app => {
  const { router, controller } = app;
  const routes = fs.readdirSync(path.join(__dirname, 'routes'));
  routes.forEach(fileName => {
    require(path.join(__dirname, 'routes', fileName))(router, controller);
  });
};
