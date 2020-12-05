const { resolveInclude } = require('ejs')
const conn = require('../includes/db')

module.exports = {

  render(req, res, erro, success) { 
    res.render('layout_default', { 
      page: 'reservations',
      title: 'Reserve - Restaurant Soboroso!',
      h1: 'Reserve uma Mesa!',
      header_image: 'images/img_bg_3.jpg',
      body: success ? {} : req.body,
      erro,
      success
    })
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      // tratando a data para mysql, no padrão YYYY/MM/DD
      const date = fields.date.split('/').reverse().join('/')

      conn.query(
        `INSERT INTO tb_reservations (name, email, people, date, time)
        VALUES(?,?,?,?,?)`, [
          fields.name,
          fields.email,
          fields.people,
          date,
          fields.time,
        ], (err, results) => {
          err ? reject(err) : resolve(results)
        }
      )  
    })
  }
}