const boardRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardRepo.getAll();

const get = id => boardRepo.get(id);

const remove = id => boardRepo.remove(id);

const save = board => {
  return boardRepo.save(new Board(board));
};

const update = (id, board) => boardRepo.update(id, board);

module.exports = { getAll, get, remove, save, update };
