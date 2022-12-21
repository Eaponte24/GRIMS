const seedUsers = require('./userSeeds');
const seedDepartments = require('./departmentSeeds');
const seedProducts = require('./productSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDepartments();
  console.log('\n----- DEPARTMENTS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  process.exit(0);
};

seedAll();
