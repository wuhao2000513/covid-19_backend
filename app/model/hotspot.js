'use strict';
// 新闻表
module.exports = app => {
  const Sequelize = app.Sequelize;
  const { STRING, TEXT } = Sequelize;
  const Hotspot = app.model.define('hotspot', {
    type: {
      type: STRING(30),
      allowNull: false,
    },
    name: STRING,
    data: TEXT,
  });
  return Hotspot;
};
