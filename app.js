if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const { memberSchema } = require('./schemas');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoSanitize = require('express-mongo-sanitize');
const MongoDBStore = require('connect-mongo');
const helmet = require('helmet');

const User = require('./models/user');

const userRoutes = require('./routes/users');
const membersRoutes = require('./routes/members');

const Member = require('./models/member');

// const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/crfc';

const dbUrl = 'mongodb://localhost:27017/cfrc';

const store = MongoDBStore.create({
	mongoUrl: dbUrl,
	touchAfter: 24 * 60 * 60,
	crypto: {
		secret: 'squirrel',
	},
});

store.on('error', (e) => console.log('session store error', e));

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('Database connected');
});

const app = express();

app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(mongoSanitize());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

const scriptSrcUrls = [
	'https://stackpath.bootstrapcdn.com/',
	'https://api.tiles.mapbox.com/',
	'https://api.mapbox.com/',
	'https://kit.fontawesome.com/',
	'https://cdnjs.cloudflare.com/',
	'https://cdn.jsdelivr.net',
];

const styleSrcUrls = [
	'https://kit-free.fontawesome.com/',
	'https://stackpath.bootstrapcdn.com/',
	'https://api.mapbox.com/',
	'https://api.tiles.mapbox.com/',
	'https://fonts.googleapis.com/',
	'https://use.fontawesome.com/',
	'https://cdn.jsdelivr.net',
];

const connectSrcUrls = [
	'https://api.mapbox.com/',
	'https://a.tiles.mapbox.com/',
	'https://b.tiles.mapbox.com/',
	'https://events.mapbox.com/',
];
const fontSrcUrls = [];
const imgSrcUrls = [
	"'self'",
	'blob:',
	'data:',
	'https://res.cloudinary.com/mayanhavoc/',
	'https://real-fi.org/assets/',
	'https://www.youtube.com',
];

app.use(
	helmet.contentSecurityPolicy({
		directives: {
			defaultSrc: [],
			connectSrc: ["'self'", ...connectSrcUrls],
			scriptSrc: ["'self'", ...scriptSrcUrls],
			styleSrc: ["'self'", ...styleSrcUrls],
			workerSrc: ["'self'", 'blob:'],
			objectSrc: [],
			frameSrc: [
				"'self'",
				'https://www.youtube.com/',
				'https://www.youtube.com https://www.youtube-nocookie.com',
				'youtube.com',
			],
			mediaSrc: ["'self'", 'https://www.youtube.com'],
			imgSrc: imgSrcUrls,
			fontSrc: ["'self'", ...fontSrcUrls],
		},
	})
);

const sessionConfig = {
	store,
	name: 'session_crfc',
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	next();
});

app.use('/', userRoutes);
app.use('/members', membersRoutes);

app.get('/', (req, res) => {
	res.render('home');
});
app.get('/about', (req, res) => {
	res.render('about');
});
app.get('/resources', (req, res) => {
	res.render('resources');
});
app.get('/working-groups', (req, res) => {
	res.render('working-groups');
});

app.all('*', (req, res, next) => {
	next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
	const { statusCode } = err;
	if (!err.message) err.message = 'Something went wrong';
	res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
	console.log('serving on port 3000');
});
