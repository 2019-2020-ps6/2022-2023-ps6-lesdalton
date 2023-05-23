const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Themem', {
  name: Joi.string().required(),
})
