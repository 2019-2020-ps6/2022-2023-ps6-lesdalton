const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const themeSchema = require('./theme.model')

module.exports = new BaseModel('Quiz', {
  theme: Joi.object(themeSchema).required(),
  name: Joi.string().required(),
})
