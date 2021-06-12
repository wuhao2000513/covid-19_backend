'use strict';
// 新闻表
module.exports = app => {
  const Sequelize = app.Sequelize;
  const { STRING, TEXT } = Sequelize;
  const News = app.model.define('news', {
    title: {
      type: STRING(30),
      allowNull: false,
    },
    sub_title: STRING(30),
    content: TEXT,
  });
  News.sync();
  return News;
};
