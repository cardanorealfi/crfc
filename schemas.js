const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
	type: 'string',
	base: joi.string(),
	messages: {
		'string.escapeHTML': '{{#label}} must not include HTML',
	},
	rules: {
		escapeHTML: {
			validate(value, helpers) {
				const clean = sanitizeHtml(value, {
					allowedTags: [],
					allowedAtributes: {},
				});
				if (clean !== value)
					return helpers.error('string.escapeHTML', { value });
				return clean;
			},
		},
	},
});

const Joi = BaseJoi.extend(extension);

module.exports.memberSchema = Joi.object({
	member: Joi.object({
		project: Joi.string().required().escapeHTML(),
		// logo: Joi.alternatives()
		// 	.try(
		// 		Joi.string()
		// 			.uri({ scheme: ['http', 'https'] })
		// 			.escapeHTML(),
		// 		Joi.binary()
		// 			.encoding('base64')
		// 			.strict()
		// 			.label('Image file')
		// 			.custom((value, helpers) => {
		// 				const validFormats = ['jpg', 'jpeg', 'png'];
		// 				const fileFormat = helpers.originalName
		// 					.split('.')
		// 					.pop()
		// 					.toLowerCase();

		// 				if (!validFormats.includes(fileFormat)) {
		// 					return helpers.error(
		// 						'Logo file format must be one of ' + validFormats.join(', ')
		// 					);
		// 				}

		// 				return value;
		// 			}, 'Logo format validation')
		// 			.max(5 * 1024 * 1024)
		// 	)
		url: Joi.string()
			.uri({ scheme: ['http', 'https'] })
			.escapeHTML()
			.required(),
		description: Joi.string().max(280).trim().escapeHTML().required(),
		status: Joi.string().escapeHTML().required(),
	}).required(),
});
