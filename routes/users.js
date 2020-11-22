var conn = require('../includes/db')
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  conn.query("SELECT * FROM tb_users ORDER BY name", (err, results) => {
    if(err) return res.send(err)
    res.send(results)
  })
})

module.exports = router
