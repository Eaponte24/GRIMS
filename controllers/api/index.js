const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const departmentRoutes = require('./departmentRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;
