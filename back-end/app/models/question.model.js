const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  label: Joi.string().required(),
  quizId: Joi.number(),
  answers: Joi.array(),
})
const { Answer } = require('./answer.models');

let questions = [
  {
    text: 'Question 1',
    id: 1,
    answers: [
      { text: 'Answer 1', id: 1 },
      { text: 'Answer 2', id: 2 },
    ],
    quizId: 1,
    image: 'image-url',
  },
];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.post('/questions', (req, res) => {
  const { text, id, answers, quizId, image } = req.body;
  const newQuestion = {
    text,
    id,
    answers: answers.map(answer => new Answer(answer.text, answer.id)),
    quizId,
    image,
  };
  questions.push(newQuestion);
  res.sendStatus(201);
});

app.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { text, answers, quizId, image } = req.body;
  const questionIndex = questions.findIndex(question => question.id === parseInt(id));
  if (questionIndex !== -1) {
    questions[questionIndex] = {
      ...questions[questionIndex],
      text,
      answers: answers.map(answer => new Answer(answer.text, answer.id)),
      quizId,
      image,
    };
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  const questionIndex = questions.findIndex(question => question.id === parseInt(id));
  if (questionIndex !== -1) {
    questions.splice(questionIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});
