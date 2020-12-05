const conn = require('../includes/db')

module.exports = {

  render(req, res, error, success) {
    res.render('layout_default', {
      page: 'contacts',
      title: 'Contato - Restaurant Soboroso!',
      h1: 'Reserve uma Mesa!',
      header_image: 'images/img_bg_2.jpg',
      body: success ? {} : req.body,
      error,
      success
    })
  },

  save(fields) {
    //*
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO tb_contacts (name, email, message)
      VALUES (?,?,?)`, [
        fields.name,
        fields.email,
        fields.message
      ], (err, results) => {
        err ? reject(err) : resolve(results)
      })
    })//*/
  }
}