const { Router } = require('express')
const router = Router()
const { getMenus } = require('../includes/admin')

router.get('/', (req, res, next) => {
  res.render('admin/index', {
    menus: getMenus(req)
  })
})

router.get('/login', (req, res, next) => {
  res.render('admin/login')
})

router.get('/contacts', (req, res, next) => {
  res.render('admin/contacts', {
    menus: getMenus(req)
  })
})

router.get('/reservations', (req, res, next) => {
  res.render('admin/reservations', {
    date: {},
    menus: getMenus(req)
  })
})

router.get('/emails', (req, res, next) => {
  res.render('admin/emails', {
    menus: getMenus(req)
  })
})

router.get('/menus', (req, res, next) => {
  res.render('admin/menus', {
    menus: getMenus(req)
  })
})

router.get('/users', (req, res, next) => {
  res.render('admin/users', {
    menus: getMenus(req)
  })
})

module.exports = router