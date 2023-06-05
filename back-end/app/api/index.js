const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')
const ThemeRouter = require('./themes')
const AnswerRouter = require('./quizzes/questions/answers')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/themes', ThemeRouter)
router.use('/answers', AnswerRouter)

module.exports = router
