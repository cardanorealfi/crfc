const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

router.route('/register').get(users.register).post(catchAsync(users.create));

router
	.route('/login')
	.get(users.login)
	.post(
		passport.authenticate('local', {
			failureFlash: true,
			failureRedirect: '/login',
		}),
		users.authenticate
	);

router.get('/logout', users.logout);

module.exports = router;
