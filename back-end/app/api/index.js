const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)

//router.get('users/:id', (req, res) => res.status(200).json())

module.exports = router