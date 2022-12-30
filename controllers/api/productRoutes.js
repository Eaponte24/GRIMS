const router = require('express').Router();
const formidable = require('formidable');
const fs = require('fs');
const { Product, Department } = require('../../models');
const { getDepartmentId, parseFileName } = require('../../utils/helpers');
const withAuth = require('../../utils/auth');
const uploadImageToCloudinary = require('../../utils/uploadImage');

// get all products
router.get('/', async (req, res) => {
	try {
		const productData = await Product.findAll({
			include: [
				{
					model: Department,
					attributes: ['id', 'department_name', 'department_image'],
				},
			],
		});

		res.json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// create a new product with a department_id in /api/products
router.post('/', async (req, res) => {
	try {
		const productData = await Product.create({
			product_name: req.body.product_name,
			product_image: req.body.product_image,
			price: req.body.price,
			stock: req.body.stock,
			department_id: req.body.department_id,
		});

		res.json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// update a product in /api/products/:id
router.put('/:id', async (req, res) => {
	try {
		const productData = await Product.update(
			{
				product_name: req.body.product_name,
				product_image: req.body.product_image,
				price: req.body.price,
				stock: req.body.stock,
				department_id: req.body.department_id,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);

		if (!productData) {
			res.status(404).json({ message: 'No product found with this id' });
			return;
		}

		res.json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a product in /api/products/:id
router.delete('/:id', async (req, res) => {
	try {
		const productData = await Product.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!productData) {
			res.status(404).json({ message: 'No product found with this id' });
			return;
		}

		res.json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST route to /product/upload that will use formidable to upload the image to cloudinary using the uploadImageToCloudinary function
// from the uploadImage.js file, then save all data from the form to the database including the secure_url from cloudinary as the product_image

router.post('/new', async (req, res) => {
	const form = new formidable.IncomingForm({
		uploadDir: __dirname + '/../../tmp', // don't forget the __dirname here
		keepExtensions: false,
		maxFileSize: 10 * 1024 * 1024, // 10 MB
	});
	form.parse(req, async (err, fields, files) => {
		if (err) {
			console.log(err);
			return res.status(500).json({ message: 'Error uploading file' });
		}
		// use object destructuring to get the path property from the files.product_image object
		console.log(files);
		const { filepath } = files.product_image;
		console.log(filepath);

		// parse the product name from the form field (remove special characters and spaces)
		// and use it as the file name
		const parsedFileName = parseFileName(fields.product_name);
		// get department id from the department name
		const departmentId = await getDepartmentId(fields.department_name);
		// upload the image to cloudinary
		if (await departmentId) {
			// use object destructuring to get the secure_url property from the uploadImageToCloudinary function
			const { secure_url } = await uploadImageToCloudinary(
				filepath,
				parsedFileName,
				fields.department_name
			);
			// save the secure_url to the database along with the other fields from the form
			// wait until secure_url resolves before saving to the database
			if (await secure_url) {
				// split secure_url and insert cloudinary image tranformation to get a smaller image with 
				// a square crop, then recompose to new secure_url variable. These will be added to the database
				const secure_url_200 = secure_url.split('/upload/').join('/upload/ar_1,c_fill,g_auto,w_200/');
				const secure_url_300 = secure_url.split('/upload/').join('/upload/ar_1,c_fill,g_auto,w_300/');
				const secure_url_400 = secure_url.split('/upload/').join('/upload/ar_1,c_fill,g_auto,w_400/');
				const secure_url_500 = secure_url.split('/upload/').join('/upload/ar_1,c_fill,g_auto,w_500/');
				console.log(secure_url);
				try {
					const productData = await Product.create({
						product_name: fields.product_name,
						product_image: secure_url,
						product_image_200: secure_url_200,
						product_image_300: secure_url_300,
						product_image_400: secure_url_400,
						product_image_500: secure_url_500,
						price: fields.price,
						stock: fields.stock,
						department_id: departmentId,
					});
					// delete the file from the tmp folder
					fs.unlink(filepath, (err) => {
						if (err) {
							console.log(err);
						} else {
							console.log(`${filepath} deleted successfully`);
						}
					});
					const singleProduct = productData.get({ plain: true });
					console.log(singleProduct);
					// render the product page with the new product
					res.render('singleproduct', { singleProduct, logged_in: req.session.logged_in });
				} catch (err) {
					res.status(500).json(err);
				}
			}
		}
	});
});

module.exports = router;
