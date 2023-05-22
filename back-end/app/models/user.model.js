const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')


module.exports = new BaseModel('User', {
  picture: Joi.string(),
  id: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  info: Joi.string(),
  config: {
    font: Joi.string(),
    fontSize: Joi.number().required(),
    lineHeight: Joi.number().required(),
    letterSpacing: Joi.number().required(),
    contrast: Joi.string(),
  },
  stats: {
    statsByTheme: Joi.array().items({
      themeName: Joi.string(),
      themePoints: Joi.number(),
    }),
  },
})
