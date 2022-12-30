const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// create login route for api/users/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//signup route
router.post('/signup', async (req, res) => {
	try {
		const signupData = await User.create({
			email: req.body.email,
			password: req.body.password,
		});

    req.session.save(() => {
      req.session.user_id = signupData.id;
      req.session.email = signupData.email;
      req.session.loggedIn = true;
    });

		res.json(signupData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// reset password route
router.put('/reset', async (req, res) => {
	try {
    newPass = await bcrypt.hash(req.body.password, 10);
		const userData = await User.update(
			{				
				password: newPass,
			},
			{
				where: {
					email: req.body.email,
				},
			}
		);

		if (!userData) {
			alert('Email not found');
			return;
		}

		res.json(userData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
