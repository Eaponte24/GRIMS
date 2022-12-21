const sequelize = require("../config/connection");
const { Department, User, Product } = require("../models");
const router = require("express").Router();

// gather homepage route for all departments
router.get("/", async (req, res) => {
  try {
    const departmentData = await Department.findAll({});

    const departments = departmentData.map((Department) =>
      Department.get({ plain: true })
    );

    console.log(departments);

    // will set this to render homepage later on, for now just testing
    return res.json(departments);
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
    });

    const departments = departmentData.get({ plain: true });

    console.log(departments);

    // will set this to render homepage later on, for now just testing
    return res.json(departments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// gather login page route, will need to add a login handlebars form
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// gather signup page route, will need to add a signup handlebars form
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
