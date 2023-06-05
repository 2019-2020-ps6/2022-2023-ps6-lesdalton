const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const Answer = require('./answer.model.js')

module.exports = new BaseModel('Question', {
  text: Joi.string().required(),
  answers: Joi.array(Answer.schema),
})
