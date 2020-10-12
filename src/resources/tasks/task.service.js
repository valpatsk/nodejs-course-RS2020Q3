const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();

const get = id => tasksRepo.get(id);

const remove = id => tasksRepo.remove(id);

const save = task => {
  return tasksRepo.save(new Task(task));
};

const update = (id, task) => tasksRepo.update(id, task);

module.exports = { getAll, get, remove, save, update };
