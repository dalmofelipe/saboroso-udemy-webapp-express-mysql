const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.render('admin/index')
})

router.get('/login', (req, res, next) => {
  res.render('admin/login')
})

router.get('/contacts', (req, res, next) => {
  res.render('admin/contacts')
})

router.get('/reservations', (req, res, next) => {
  res.render('admin/reservations', {
    date: {}
  })
})

router.get('/emails', (req, res, next) => {
  res.render('admin/emails')
})

router.get('/users', (req, res, next) => {
  res.render('admin/users')
})

module.exports = router