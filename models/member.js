const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
	project: String,
	logo: {
		url: String,
		filename: String,
	},
	description: String,
	url: String,
	status: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Member', MemberSchema);
