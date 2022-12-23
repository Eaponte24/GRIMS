const sequelize = require('../config/connection');
const { User } = require('../models');
const seedDepartments = require('./departmentSeeds');
const seedProducts = require('./productSeeds');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');
  await seedDepartments();
  console.log('\n----- DEPARTMENTS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
