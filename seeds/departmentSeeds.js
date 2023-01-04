const { Department } = require('../models');

const departmentData = [
  {
    department_name: 'Produce',
    department_image: 'https://i.ibb.co/5vbBMZc/produce.png',
  },
  {
    department_name: 'Dairy',
    department_image: 'https://i.ibb.co/MMrbHZR/dairy.jpg',
  },
  {
    department_name: 'Meat',
    department_image: 'https://i.ibb.co/NrDwDvc/meat.jpg',
  },
  {
    department_name: 'Seafood',
    department_image: 'https://i.ibb.co/dQT1FKZ/seafood.jpg',
  },
  {
    department_name: 'Bakery',
    department_image: 'https://i.ibb.co/RQ9jB3Q/bakery.jpg',
  }
];


const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
