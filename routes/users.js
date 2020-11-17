const PostUsers = require('express').Router();
const { getAllUsers, createUser, getSingleUser } = require('../controllers/users');

PostUsers.get('/users/:id', getSingleUser);
PostUsers.get('/users', getAllUsers);
PostUsers.post('/users', createUser);

module.exports = PostUsers;
