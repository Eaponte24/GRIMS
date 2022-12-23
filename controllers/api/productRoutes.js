const router = require('express').Router();
const { Product } = require('../../models');
// const withAuth = require('../../utils/auth');

    // router.get("/", async (req, res) => {
    //   try {
    //     const productData = await Product.findAll({});
    //     console.log("test");
    
    //     const products = productData.map((Product) =>
    //       Product.get({ plain: true })
    //     );
    //     res.render('products', {
    //       products,
    //       logged_in: req.session.logged_in,
    //     });
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
