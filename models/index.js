const User = require('./User');
const Product = require('./Product');
const Department = require('./Department');

// create associations
Department.hasMany(Product, {
  foreignKey: 'department_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Department, {
  foreignKey: 'department_id',
});

module.exports = { User, Product, Department };