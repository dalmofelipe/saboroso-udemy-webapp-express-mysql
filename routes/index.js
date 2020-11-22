var express = require('express')
var router = express.Router()
// var conn = require('../includes/db')
var { getMenus } = require('../includes/menus')

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
  res.render('layout_default', {
    page: 'contacts',
    title: 'Contato - Restaurant Soboroso!',
    h1: 'Reserve uma Mesa!',
    header_image: 'images/img_bg_2.jpg' 
  })
})

router.get('/reservations', (req, res, next) => {
  res.render('layout_default', { 
    page: 'reservations',
    title: 'Reserve - Restaurant Soboroso!',
    h1: 'Reserve uma Mesa!',
    header_image: 'images/img_bg_3.jpg'
  })
})

module.exports = router;
