const { Router } = require('express')

const { Quiz, User} = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const QuestionsRouter = require('./questions')
const { buildQuizz } = require('./manager')

const router = new Router()

router.use('/:quizId/questions', QuestionsRouter)

router.get('/', (req, res) => {
  try {
    const quizzes = Quiz.get()
    res.status(200).json(quizzes)
  } catch (err) {
    manageAllErrors(res, err)
  }
})


// /////////////////////////////////
//
//    AFFICHER UN QUIZ
//
// /////////////////////////////////
router.get('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.getById(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
    console.log(err)
  }
})


// /////////////////////////////////
//
//    CREER UN QUIZ
//
// /////////////////////////////////
router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})



router.delete('/:quizId', (req, res) => {
  try {
    Quiz.delete(req.params.quizId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
