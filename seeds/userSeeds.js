const { User } = require('../models');

const userData = [
  {
    username: 'ricky',
    password: 'password123',
  },
  {
    username: 'ama',
    password: 'password123',
  },
  {
    username: 'robert',
    password: 'password123'
  },
  {
    username: 'jakub',
    password: 'password123',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
