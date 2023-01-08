const { Department } = require('../models');

const departmentData = [
  {
    department_name: 'Produce',
    department_image: 'https://res.cloudinary.com/grims/image/upload/v1673145694/departments/produce.jpg',
  },
  {
    department_name: 'Dairy',
    department_image: 'https://res.cloudinary.com/grims/image/upload/v1673145694/departments/dairy.jpg',
  },
  {
    department_name: 'Meat',
    department_image: 'https://res.cloudinary.com/grims/image/upload/v1673145694/departments/meat.jpg',
  },
  {
    department_name: 'Seafood',
    department_image: 'https://res.cloudinary.com/grims/image/upload/v1673145694/departments/seafood.jpg',
  },
  {
    department_name: 'Bakery',
    department_image: 'https://res.cloudinary.com/grims/image/upload/v1673145694/departments/bakery.jpg',
  }
];


const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
