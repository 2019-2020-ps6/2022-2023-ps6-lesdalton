const express = require('express');
const router = express.Router();
const Joi = require('joi');
const BaseModel = require('../utils/base-model');

// Create the Answer model
const Answer = new BaseModel('Answer', {
  type: Joi.string(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  questionId: Joi.number(),
});

let answers = [];

router.post('/answers', (req, res) => {
  const { error } = Answer.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const newAnswer = req.body;
  answers.push(newAnswer);
  res.status(201).json(newAnswer);
});

router.get('/answers', (req, res) => {
  res.json(answers);
});

router.get('/answers/:id', (req, res) => {
  const answerId = parseInt(req.params.id);
  const answer = answers.find(a => a.id === answerId);
  if (!answer) {
    return res.status(404).json({ error: 'Answer not found' });
  }
  res.json(answer);
});

router.put('/answers/:id', (req, res) => {
  const answerId = parseInt(req.params.id);
  const { error } = Answer.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  const answerIndex = answers.findIndex(a => a.id === answerId);
  if (answerIndex === -1) {
    return res.status(404).json({ error: 'Answer not found' });
  }
  
  const updatedAnswer = { ...answers[answerIndex], ...req.body };
  answers[answerIndex] = updatedAnswer;
  res.json(updatedAnswer);
});

router.delete('/answers/:id', (req, res) => {
  const answerId = parseInt(req.params.id);
  const answerIndex = answers.findIndex(a => a.id === answerId);
  if (answerIndex === -1) {
    return res.status(404).json({ error: 'Answer not found' });
  }
  
  answers.splice(answerIndex, 1);
  res.sendStatus(204);
});
