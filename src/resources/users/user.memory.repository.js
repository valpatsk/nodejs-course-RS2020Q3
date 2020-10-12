const DB = require('../dataBase/localDB');
const TABLE_NAME = 'Users';

const getAll = async () => {
  return DB.getAllEntities(TABLE_NAME);
};

module.exports = { getAll };
