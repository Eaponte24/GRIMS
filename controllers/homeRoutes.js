const router = require('express').Router();
const { Department, Product, User } = require('../models');
const withAuth = require('../utils/auth');
//------------------------------------------------------------------------------------
    router.get("/",  async (req, res) => {
      try {
        const departmentData = await Department.findAll({});
    
        const departments = departmentData.map((Department) =>
          Department.get({ plain: true })
        );

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
    router.get("/departments/:id", async (req, res) => {
      try {
        const departmentData = await Department.findOne({
          where: {
            id: req.params.id,
          },
          include: [
            {
              model: Product,
              attributes: ["id", "product_name", "price", "stock", "product_image"],
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

    // get a single product with a department_id in /products/:id
router.get("/products/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          attributes: ["id", "department_name", "department_image"],
        },
      ],
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id" });
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

module.exports = router;


// gather signup page route, will need to add a signup handlebars form
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

module.exports = router;
