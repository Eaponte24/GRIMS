const router = require('express').Router();
const { Product, Department } = require('../../models');
const withAuth = require('../../utils/auth');
const { getDepartmentId, parseFileName } = require('../../utils/helpers');
const uploadImageToCloudinary = require('../../utils/uploadImage');
const formidable = require('formidable');
const fs = require('fs');

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

router.post('/upload', async (req, res) => {
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
		// use object destructuring to get the path property from the files.file object
		console.log(files);
		const { filepath } = files.product_image;
		console.log(filepath);

		// parse the product name from the form field (remove special characters and spaces) 
		// and use it as the file name
		const parsedFileName = parseFileName(fields.product_name);
		// use object destructuring to get the secure_url property from the uploadImageToCloudinary function
		const { secure_url } = await uploadImageToCloudinary(filepath, parsedFileName, fields.department_id);
		fs.unlink;
		// save the secure_url to the database along with the other fields from the form
		// wait until secure_url resolves before saving to the database
		if (await secure_url) {
			console.log(secure_url);
			try {
				const productData = await Product.create({
					product_name: fields.product_name,
					product_image: secure_url,
					price: fields.price,
					stock: fields.stock,
					department_id: fields.department_id,
				});
				res.json(productData);
			} catch (err) {
				res.status(500).json(err);
			}
		}
	});
});

module.exports = router;
