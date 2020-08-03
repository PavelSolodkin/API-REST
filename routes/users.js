const usersRouter = require('express').Router();
const { getUsers, createUser, getSingleUser } = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getSingleUser);

module.exports = usersRouter;
