const router = require('express').Router();
const { Department, Product } = require('../../models');

// get all departments
router.get('/', async (req, res) => {
	try {
		const departmentData = await Department.findAll({
			include: [
				{
					model: Product,
					attributes: ['id', 'product_name', 'product_image', 'price', 'stock', 'department_id'],
				},
			],
		});
		res.status(200).json(departmentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;