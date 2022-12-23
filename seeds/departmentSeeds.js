const { Department } = require('../models');
// departments: produce, dairy, meat, seafood, bakery

const departmentData = [
  {
    department_name: 'Produce',
    department_image: 'https://images.unsplash.com/photo-1605279682024-5a25531582dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
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
