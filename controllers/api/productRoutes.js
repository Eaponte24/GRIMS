const router = require("express").Router();
const { Product, Department } = require("../../models");
const withAuth = require("../../utils/auth");

// get all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Department,
          attributes: ["id", "department_name", "department_image"],
        },
      ],
    });

    res.json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// create a new product with a department_id in /api/products
router.post("/",  async (req, res) => {
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
router.put("/:id", async (req, res) => {
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
            res.status(404).json({ message: "No product found with this id" });
            return;
          }

        res.json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a product in /api/products/:id
router.delete("/:id", async (req, res) => {
    try {
        const productData = await Product.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!productData) {
            res.status(404).json({ message: "No product found with this id" });
            return;
          }

        res.json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});
        

module.exports = router;
