
const Joi = require('joi')
const BaseModel = require('../utils/base-model')

const resultSchema = new BaseModel('Result', {
  userId: Joi.string().required(),
  quizId: Joi.string().required(),
  questionId: Joi.string().required(),
  answer:  Joi.boolean().required(),  
})

module.exports = resultSchema


