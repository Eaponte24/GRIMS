const Product = require('../models');

const productData = [
  {
    product_name: 'Honey Crisp Apples',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Red Delicious Apples',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Pink Lady Apples',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Bananas',
    product_image: 'https://via.placeholder.com/150',
    price: 0.99,
    stock: 50,
    department_id: 1,
  },
  {
    product_name: 'Strawberries',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 22,
    department_id: 1,
  },
  {
    product_name: 'Blueberries',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Raspberries',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Blackberries',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Peaches',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 50,
    department_id: 1,
  },
  {
    product_name: 'Plums',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 22,
    department_id: 1,
  },
  {
    product_name: 'Pears',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Oranges',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Grapes',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Lemons',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 50,
    department_id: 1,
  },
  {
    product_name: 'Limes',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 22,
    department_id: 1,
  },
  {
    product_name: 'Broccoli',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Carrots',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Cauliflower',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Cucumbers',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 22,
    department_id: 1,
  },
  {
    product_name: 'Green Beans',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Green Peppers',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Lettuce',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Mushrooms',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 50,
    department_id: 1,
  },
  {
    product_name: 'White Onions',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 22,
    department_id: 1,
  },
  {
    product_name: 'Potatoes',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 14,
    department_id: 1,
  },
  {
    product_name: 'Garlic',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 25,
    department_id: 1,
  },
  {
    product_name: 'Spinach',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 1,
  },
  {
    product_name: 'Tomatoes',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 50,
    department_id: 1,
  },
  {
    product_name: 'Milk',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 14,
    department_id: 2,
  },
  {
    product_name: 'Oatly Oat Milk',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 25,
    department_id: 2,
  },
  {
    product_name: 'Almond Breeze Almond Milk',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 12,
    department_id: 2,
  },
  {
    product_name: 'Silk Soy Milk',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 50,
    department_id: 2,
  },
  {
    product_name: 'Eggs',
    product_image: 'https://via.placeholder.com/150',
    price: 4.59,
    stock: 25,
    department_id: 2,
  },
  {
    product_name: 'Butter',
    product_image: 'https://via.placeholder.com/150',
    price: 1.99,
    stock: 12,
    department_id: 2,
  },
  {
    product_name: 'Cheddar Cheese',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 50,
    department_id: 2,
  },
  {
    product_name: 'Mozzarella Cheese',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 22,
    department_id: 2,
  },
  {
    product_name: 'Parmesan Cheese',
    product_image: 'https://via.placeholder.com/150',
    price: 3.99,
    stock: 14,
    department_id: 2,
  },
  {
    product_name: 'Chobani Greek Yogurt',
    product_image: 'https://via.placeholder.com/150',
    price: 1.29,
    stock: 22,
    department_id: 2,
  },
  {
    product_name: 'Yoplait Yogurt',
    product_image: 'https://via.placeholder.com/150',
    price: 1.29,
    stock: 14,
    department_id: 2,
  },
  {
    product_name: 'Heavy Cream',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 25,
    department_id: 2,
  },
  {
    product_name: 'Half & Half',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 12,
    department_id: 2,
  },
  {
    product_name: 'Sour Cream',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 50,
    department_id: 2,
  },
  {
    product_name: 'Chicken Breast',
    product_image: 'https://via.placeholder.com/150',
    price: 8.99,
    stock: 22,
    department_id: 3,
  },
  {
    product_name: 'Chicken Thighs',
    product_image: 'https://via.placeholder.com/150',
    price: 8.99,
    stock: 14,
    department_id: 3,
  },
  {
    product_name: 'Ground Beef',
    product_image: 'https://via.placeholder.com/150',
    price: 5.99,
    stock: 14,
    department_id: 3,
  },
  {
    product_name: 'Beef Sirloin',
    product_image: 'https://via.placeholder.com/150',
    price: 9.99,
    stock: 14,
    department_id: 3,
  },
  {
    product_name: 'Pork Chops',
    product_image: 'https://via.placeholder.com/150',
    price: 6.99,
    stock: 25,
    department_id: 3,
  },
  {
    product_name: 'Pork Tenderloin',
    product_image: 'https://via.placeholder.com/150',
    price: 6.99,
    stock: 50,
    department_id: 3,
  },
  {
    product_name: 'Salmon',
    product_image: 'https://via.placeholder.com/150',
    price: 12.99,
    stock: 22,
    department_id: 4,
  },
  {
    product_name: 'Tilapia',
    product_image: 'https://via.placeholder.com/150',
    price: 9.99,
    stock: 14,
    department_id: 4,
  },
  {
    product_name: 'Shrimp',
    product_image: 'https://via.placeholder.com/150',
    price: 9.99,
    stock: 14,
    department_id: 4,
  },
  {
    product_name: 'Cod',
    product_image: 'https://via.placeholder.com/150',
    price: 9.99,
    stock: 14,
    department_id: 4,
  },
  {
    product_name: 'Tuna',
    product_image: 'https://via.placeholder.com/150',
    price: 9.99,
    stock: 25,
    department_id: 4,
  },
  {
    product_name: 'Lobster',
    product_image: 'https://via.placeholder.com/150',
    price: 14.99,
    stock: 12,
    department_id: 4,
  },
  {
    product_name: 'Crab',
    product_image: 'https://via.placeholder.com/150',
    price: 14.99,
    stock: 50,
    department_id: 4,
  },
  {
    product_name: 'Rye Bread',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 22,
    department_id: 5,
  },
  {
    product_name: 'White Bread',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 14,
    department_id: 5,
  },
  {
    product_name: 'Whole Wheat Bread',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 14,
    department_id: 5,
  },
  {
    product_name: 'Bagels',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 14,
    department_id: 5,
  },
  {
    product_name: 'English Muffins',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 25,
    department_id: 5,
  },
  {
    product_name: 'Pita Bread',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 12,
    department_id: 5,
  },
  {
    product_name: 'Hamburger Buns',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 50,
    department_id: 5,
  },
  {
    product_name: 'Hot Dog Buns',
    product_image: 'https://via.placeholder.com/150',
    price: 2.99,
    stock: 22,
    department_id: 5,
  }
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
