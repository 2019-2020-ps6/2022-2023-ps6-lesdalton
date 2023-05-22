const { Router } = require('express')

const { Theme } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')

const router = new Router()

///////////////////////////////////
//
//    AFFICHER TOUS LES THEMES
//
///////////////////////////////////
router.get('/', (req, res) => {
    try {
      res.status(200).json(Theme.get())
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  
  
  
  ///////////////////////////////////
  //
  //    AFFICHER UN THEME
  //
  ///////////////////////////////////
  router.get('/:themeId', (req, res) => {
    try {
      res.status(200).json(Theme.getById(req.params.themeId))
    } catch (err) {
      manageAllErrors(res, err)
    }
  })


  ///////////////////////////////////
//
//    CREER UN THEME
//
///////////////////////////////////
router.post('/', (req, res) => {
  try {
    const theme = Theme.create({ ...req.body })
    res.status(201).json(theme)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

  
  router.put('/:themeId', (req, res) => {
    try {
      res.status(200).json(Theme.update(req.params.themeId, req.body))
    } catch (err) {
      manageAllErrors(res, err)
    }
  })
  