const { Department } = require('../models');
// departments: produce, dairy, meat, seafood, bakery

const departmentData = [
  {
    department_name: 'Produce',
    department_image: 'https://i.ibb.co/WtkbGtD/produce.jpg',
  },
  {
    department_name: 'Dairy',
    department_image: 'https://i.ibb.co/7RhvwRT/dairy.jpg',
  },
  {
    department_name: 'Meat',
    department_image: 'https://i.ibb.co/4sn6WBf/meat.jpg',
  },
  {
    department_name: 'Seafood',
    department_image: 'https://i.ibb.co/ftPzgQz/seafood.jpg',
  },
  {
    department_name: 'Bakery',
    department_image: 'https://i.ibb.co/RyZwD4m/bakery.jpg',
  }
];


const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
