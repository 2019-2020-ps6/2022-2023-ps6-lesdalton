const { Router } = require('express')

const { User } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()


///////////////////////////////////
//
//    AFFICHER TOUS LES USERS
//
///////////////////////////////////
router.get('/', (req, res) => {
  try {
    res.status(200).json(User.get())
  } catch (err) {
    manageAllErrors(res, err)
    console.log(err)
  }
})



///////////////////////////////////
//
//    AFFICHER UN USER
//
///////////////////////////////////
router.get('/:userId', (req, res) => {
  try {
    res.status(200).json(User.getById(req.params.userId))
  } catch (err) {
    manageAllErrors(res, err)
    console.log(err)
  }
})


///////////////////////////////////
//
//    CREER UN USER
//
///////////////////////////////////
router.post('/', (req, res) => {
  try {
    const user = User.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    manageAllErrors(res, err)
    console.log(err)
  }
})


///////////////////////////////////
//
//    UPDATE UN USER
//
///////////////////////////////////
router.put('/:userId', (req, res) => {
  try {
    res.status(200).json(User.update(req.params.userId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


///////////////////////////////////
//
//    SUPPRIMER UN USER
//
///////////////////////////////////
router.delete('/:userId', (req, res) => {
  try {
    User.delete(req.params.userId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
