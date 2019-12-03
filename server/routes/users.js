const router = require("express").Router()
const uuid = require('uuid/v4')
const sha512 = require('js-sha512')
const db = require('../db')
const config = require('config')
const jwt = require('jsonwebtoken')


router.post('/register', (req, res, next) => {
  const salt = uuid()
  const name = req.body.name
  const password = sha512(req.body.password + salt)
  const address = req.body.address
  const bed_option = req.body.bed_option
  const total_beds = req.body.total_beds

  const sql = `INSERT INTO shelters (name, password, salt, address, bed_option, total_beds) VALUE (?, ?, ?, ?, ?, ?)`
  
  db.query(sql, [name, password, salt, address, bed_option, total_beds], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }

    res.json({
      message: 'User created',
      results
    })
  })
})

  router.post('/shelter', (req, res, next) => {
    const name = req.body.name
    const address = req.body.address
    const bed_option = req.body.bed_option
    const total_beds = req.body.total_beds

    const sql = `
      SELECT * FROM shelters WHERE name = ? AND address = ? AND bed_option = Y AND total_beds = ?
    `

    db.query(sql, [name, address, bed_option, total_beds], (err, results, fields) => {
      if (err) {
        throw new Error(err)
      }

      res.json({
        message: 'Shelter List',
        results
      })
    })
  })

  router.post('/login', (req, res, next) => {
    const name = req.body.name
    let password = req.body.password

    db.query('SELECT salt FROM shelters WHERE name = ?', [name], (err, results, fields) => {
      if (results.length > 0) {
        password = sha512(password + results[0].salt)

        const sql = `
        SELECT count(1) as count FROM shelters WHERE name = ? AND password = ?
        `

        db.query(sql, [name, password], (err, results, fields) => {
          if (results[0].count > 0) {
            const token = jwt.sign({ name }, config.get('secret'))

            res.json({
              message: 'Authenticated',
              token
            })
          } else {
            res.status(401).json({
              message: "Name or Password are incorrect"
            })
          }
        })
      } else {
        res.status(401).json({
          message: "User doesn't exist "
        })
      }
    })
  })

module.exports = router
