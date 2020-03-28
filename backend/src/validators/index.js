const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {

	//ongs
	createOngValidator() {
		return celebrate({
			[Segments.BODY]: Joi.object().keys({
				name: Joi.string().required(),
				email: Joi.string().required().email(),
				whatsapp: Joi.string().required().min(10).max(15),
				city: Joi.string().required(),
				uf: Joi.string().length(2)
			})
		})
	},

	//incidents
	indexIncidentValidator() {
		return celebrate({
			[Segments.QUERY]: Joi.object().keys({
				page: Joi.number(),
			})
		})
	},

	deleteIncidentValidator() {
		return celebrate({
			[Segments.PARAMS]: Joi.object().keys({
				id: Joi.number().required(),
			})
		})
	},

	//profile
	profileIndexValidator() {
		return celebrate({
			[Segments.HEADERS]: Joi.object({
				authorization: Joi.string().required()
			}).unknown()
		})
	}

}


