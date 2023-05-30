const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  text: Joi.string().required(),
  answers: Joi.array(),
})
