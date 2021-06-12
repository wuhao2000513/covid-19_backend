'use strict';
// user record table
module.exports = app => {
  const Sequelize = app.Sequelize;
  const { STRING, TINYINT, INTEGER } = Sequelize;
  const Record = app.model.define('record', {
    user_id: INTEGER,
    position: {
      type: STRING,
    },
  });
  return Record;
};
