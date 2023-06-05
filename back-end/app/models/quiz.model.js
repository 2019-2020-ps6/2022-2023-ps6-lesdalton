const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const Question = require('./question.model.js')

module.exports = new BaseModel('Quiz', {
  theme: {
    name: Joi.string().required(),
  },
  name: Joi.string().required(),
  questions: Joi.array().items(Question.schema),
})
