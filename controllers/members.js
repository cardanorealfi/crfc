const Member = require('../models/member');

module.exports.index = async (req, res) => {
	const members = await Member.find({});
	res.render('members/index', { members });
};

module.exports.new = (req, res) => {
	res.render('members/new');
};

module.exports.create = async (req, res, next) => {
	const member = new Member(req.body.member);
	member.logo = { url: req.file.path, filename: req.file.filename };
	member.author = req.user._id;
	await member.save();
	req.flash('success', 'Created new member');
	res.redirect(`members/${member._id}`);
};

module.exports.show = async (req, res) => {
	const member = await Member.findById(req.params.id).populate('author');
	if (!member) {
		req.flash('error', "Can't find member");
		return res.redirect('/members');
	}
	res.render('members/show', { member });
};

module.exports.edit = async (req, res) => {
	const { id } = req.params;
	const member = await Member.findById(id);
	if (!member) {
		req.flash('error', "Can't find member");
		return res.redirect('/members');
	}
	res.render('members/edit', { member });
};

module.exports.update = async (req, res) => {
	const { id } = req.params;
	const member = await Member.findByIdAndUpdate(id, { ...req.body.member });
	member.logo = { url: req.file.path, filename: req.file.filename };
	await member.save();
	req.flash('success', 'Member update successful');
	res.redirect(`/members/${member._id}`);
};

module.exports.delete = async (req, res) => {
	const { id } = req.params;
	await Member.findByIdAndDelete(id);
	req.flash('success', 'Member deleted');
	res.redirect('/members');
};
