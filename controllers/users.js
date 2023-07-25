const User = require('../models/user');

module.exports.register = (req, res) => {
	res.render('users/register');
};

module.exports.create = async (req, res, next) => {
	try {
		const { email, username, password } = req.body;
		const user = new User({ email, username });

		// Generate a unique token
		// const token = req.uuidv4();
		// console.log(token);

		// Send the authentication email
		// await req.transporter.sendMail({
		// 	from: 'realficardano@gmail.com',
		// 	to: email,
		// 	subject: 'Account Verification',
		// 	text: `Click the following link to verify your account: ${req.headers.origin}/verify?token=${token}`,
		// });

		// Save the token to the user model or your database for later verification
		// user.token = token;
		await user.save();
		const registeredUser = await User.register(user, password);
		req.login(registeredUser, (err) => {
			if (err) return next(err);
			req.flash('success', `Welcome ${user.username}!`);
			res.redirect('/members');
		});
	} catch (err) {
		req.flash('error', err.message);
		res.redirect('register');
	}
};

module.exports.login = (req, res) => {
	res.render('users/login');
};

module.exports.authenticate = (req, res) => {
	req.flash('success', `Welcome back ${req.session.passport.user}!`);
	res.redirect('/members');
	delete req.session;
};

module.exports.logout = (req, res) => {
	try {
		req.logout(() => {
			req.flash('success', 'Logged out');
			res.redirect('/members');
		});
	} catch (err) {
		console.error(err);
	}
};
