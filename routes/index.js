var express = require('express')
var router = express.Router()
var { getMenus } = require('../includes/menus')
let reservations = require('../includes/reservations')
let contacts = require('../includes/contacts')

/* GET home page. */
router.get('/', function(req, res, next) {
  getMenus().then(results => {
    res.render('layout_default', {
      page: 'index',
      title: 'Restaurant Saboroso!',
      menus: results
    })
  })
})

router.get('/menus', (req, res, next) => {
  getMenus().then(results => {
    res.render('layout_default', { 
      page: 'menus', 
      title: 'Menu - Restaurant Soboroso!',
      h1: 'Saboreie nosso menu!',
      header_image: 'images/img_bg_1.jpg',
      menus: results
    })
  })
})

router.get('/services', (req, res, next) => {
  res.render('layout_default', { 
    page: 'services',
    title: 'Serviços - Restaurant Soboroso!',
    h1: 'Reserve uma Mesa!',
    header_image: 'images/img_bg_2.jpg'
  })
})

router.get('/contacts', (req, res, next) => {
  contacts.render(req, res)
})
router.post('/contacts', (req, res, next) => {
  if(!req.body.name || !req.body.email || !req.body.message) {
    return contacts.render(req, res, "Preencha todos os campos!")
  }

  contacts.save(req.body)
    .then(_ => contacts.render(req, res, null, "Messagem enviada com sucesso!"))
    .catch(err => contacts.render(req, res, err.message))
})

router.get('/reservations', (req, res, next) => {
  reservations.render(req, res)
})
router.post('/reservations', (req, res, next) => {
  if(!req.body.name) {
    reservations.render(req, res, 'Digite o nome')
  } else if(!req.body.email) {
    reservations.render(req, res, 'Digite o email')
  } else if(!req.body.people) {
    reservations.render(req, res, 'Informe a quantidade de pessoas')
  } else if(!req.body.date) {
    reservations.render(req, res, 'Informe a Data')
  } else if(!req.body.time) {
    reservations.render(req, res, 'Digite em que horas')
  } else {
    reservations.save(req.body)
      .then(_ => reservations.render(req, res, null, "Reserva feita com sucesso!"))
      .catch(err => reservations.render(req, res, err.message))
  }
})

module.exports = router;
