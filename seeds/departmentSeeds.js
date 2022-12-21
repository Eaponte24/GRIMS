const { Department } = require('../models');
// departments: produce, dairy, meat, seafood, bakery

const departmentData = [
  {
    department_name: 'Produce',
    department_image: 'https://via.placeholder.com/250',
  },
  {
    department_name: 'Dairy',
    department_image: 'https://via.placeholder.com/250',
  },
  {
    department_name: 'Meat',
    department_image: 'https://via.placeholder.com/250',
  },
  {
    department_name: 'Seafood',
    department_image: 'https://via.placeholder.com/250',
  },
  {
    department_name: 'Bakery',
    department_image: 'https://via.placeholder.com/250',
  }
];


const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
