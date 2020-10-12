const DB = require('../dataBase/localDB');
const TABLE_NAME = 'Tasks';

const getAll = async () => {
  return DB.getAllEntities(TABLE_NAME);
};

const get = async id => {
  try {
    const task = await DB.getEntity(TABLE_NAME, id);
    if (!task) {
      throw new Error(`Couldn't find a task with id: ${id}`);
    }
    return task;
  } catch (err) {
    console.error(err.message);
  }
};

const remove = async id => {
  if (!(await DB.removeEntity(TABLE_NAME, id))) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }
};

const save = async task => {
  return DB.saveEntity(TABLE_NAME, task);
};

const update = async (id, task) => {
  const entity = await DB.updateEntity(TABLE_NAME, id, task);
  if (!entity) {
    throw new Error(`Couldn't find a task with id: ${id}`);
  }

  return entity;
};

module.exports = { getAll, get, remove, save, update };
