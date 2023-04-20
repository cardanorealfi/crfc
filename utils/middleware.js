const { memberSchema } = require('../schemas');
const ExpressError = require('./ExpressError');
const Member = require('../models/member');

module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		req.flash('error', 'You are not signed in');
		return res.redirect('/login');
	}
	next();
};

module.exports.validateMember = (req, res, next) => {
	const { error } = memberSchema.validate(req.body);
	if (error) {
		const message = error.details.map((el) => el.message).join(',');
		throw new ExpressError(message, 400);
	} else {
		next();
	}
};

module.exports.isAuthor = async (req, res, next) => {
	const { id } = req.params;
	const member = await Member.findById(id);
	if (!member.author.equals(req.user._id)) {
		req.flash('error', "You cannot edit another members' page");
		return res.redirect(`/members/${id}`);
	}
	next();
};
