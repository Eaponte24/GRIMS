const router = require('express').Router();
const { Department, Product, User } = require('../models');
const withAuth = require('../utils/auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//------------------------------------------------------------------------------------
router.get('/', withAuth, async (req, res) => {
	try {
		const departmentData = await Department.findAll({});

		const departments = departmentData.map((Department) => Department.get({ plain: true }));

		console.log(departments);

		res.render('homepage', {
			departments,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// homepage route for a single department
router.get('/departments/:id', withAuth, async (req, res) => {
	try {
		const departmentData = await Department.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Product,
					attributes: [
						'id',
						'product_name',
						'price',
						'stock',
						'product_image',
						'product_image_200',
						'product_image_300',
						'product_image_400',
						'product_image_500',
					],
				},
			],
		});

		const productsArray = departmentData.products;

		// converting the productsArray into a plain object
		const products = productsArray.map((Product) => Product.get({ plain: true }));

		console.log(products);

		res.render('products', {
			products,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Search route
router.get('/product/:search', async (req, res) => {
	try {
		const productSearch = await Product.findAll({
			where: {
				product_name: {
					[Op.like]: `%${req.params.search}%`,
				},
			},
		});
		const products = productSearch.map((Product) => Product.get({ plain: true }));

		res.render('products', {
			products,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// get a single product with a department_id in /products/:id
router.get('/products/:id', withAuth, async (req, res) => {
	try {
		const productData = await Product.findByPk(req.params.id, {
			include: [
				{
					model: Department,
					attributes: ['id', 'department_name', 'department_image'],
				},
			],
		});

		if (!productData) {
			res.status(404).json({ message: 'No product found with this id' });
			return;
		}

		const singleProduct = productData.get({ plain: true });

		console.log(singleProduct);

		res.render('singleproduct', {
			singleProduct,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//-------------------------------------------------------------------------------
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/');
		return;
	}

	res.render('login');
});


router.get('/signup', (req, res) => {
	res.render('signup');
});

module.exports = router;
