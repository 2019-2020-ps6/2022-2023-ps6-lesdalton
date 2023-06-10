const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const Answer = require('./answer.model.js')

module.exports = new BaseModel('Question', {
  text: Joi.string().required(),
  answers: Joi.array().items(Answer.schema),
})
const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Question', {
  question: {
    text: Joi.string().required(),
    options: Joi.array().items(Joi.string().required()).min(2).unique(),
    correctOptionIndex: Joi.number().min(0).required(),
  },
});