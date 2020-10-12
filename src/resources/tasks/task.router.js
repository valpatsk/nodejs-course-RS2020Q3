const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');
const uuid = require('uuid');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  await res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.get(req.params.id);
  res.status(200).send(task);
});

router.route('/:id').delete(async (req, res) => {
  try {
    await taskService.remove(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  console.log('task param', req.params, req.body);
  const task = await taskService.save(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.body.boardId ? req.body.boardId : uuid(),
      columnId: req.body.columnId
    })
  );
  res.status(200).send(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await taskService.update(req.params.id, {
    id: req.body.id,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.body.boardId,
    columnId: req.body.columnId
  });

  res.status(200).send(task);
});

module.exports = router;
