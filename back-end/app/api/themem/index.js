const { Router } = require('express')

const { Themem } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

///////////////////////////////////
//
//    AFFICHER TOUS LES THEMES
//
///////////////////////////////////
router.get('/', (req, res) => {
    try {
      res.status(200).json(Themem.get())
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  module.exports = router