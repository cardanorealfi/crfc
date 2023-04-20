const express = require('express');
const router = express.Router();
const members = require('../controllers/members');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateMember } = require('../utils/middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Member = require('../models/member');

router
	.route('/')
	.get(catchAsync(members.index))
	.post(
		isLoggedIn,
		upload.single('logo'),
		validateMember,
		catchAsync(members.create)
	);

router.get('/new', isLoggedIn, members.new);

router
	.route('/:id')
	.get(catchAsync(members.show))
	.put(
		isLoggedIn,
		isAuthor,
		upload.single('logo'),
		validateMember,
		catchAsync(members.update)
	)
	.delete(isLoggedIn, isAuthor, catchAsync(members.delete));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(members.edit));

module.exports = router;
