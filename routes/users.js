const PostUsers = require('express').Router();
const { getAllUsers, createUser, getSingleUser } = require('../controllers/users');

PostUsers.get('/users', getAllUsers);
PostUsers.get('/users/:id', getSingleUser);
PostUsers.post('/users', createUser);

module.exports = PostUsers;
