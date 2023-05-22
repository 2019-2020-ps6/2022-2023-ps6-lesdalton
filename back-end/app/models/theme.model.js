const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const string = require('joi/lib/types/string/index.js')

module.exports = new BaseModel('Theme', {
  name: Joi.string().required(),
  id: Joi.number(),
  image: Joi.string(),
})