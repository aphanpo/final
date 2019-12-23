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
  const phone = req.body.phone
  const email = req.body.email
  const address = req.body.address
  const bed_option = req.body.bed_option
  const open_beds = req.body.open_beds
  const total_beds = req.body.total_beds
  const meal_option = req.body.meal_option
  const days_open = req.body.days_open
  const hours_open = req.body.hours_open
  const hours_closed = req.body. hours_closed

  const sql = `INSERT INTO shelters (name, password, salt, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  
  db.query(sql, [name, password, salt, address, phone, email, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }

    res.json({
      message: 'User created',
      results
    })
  })
})

// router.get('/reservation/:date/:name', (req, res, next) => {
//   const date = req.params.date
//   const shelter_name = req.params.name
//   const sql =  `
//     SELECT * FROM reservations WHERE date = ? AND shelter_name = ?
//     `

//     db.query(sql, [date, shelter_name], (err, results, fields) => {
//       res.json(results)
// })
// })
router.post('/reservation', (req, res, next) => {
  const date = req.body.date
  const shelter_id = req.body.shelter_id
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const Gender = req.body.Gender
  const shelter_name = req.body.shelter_name

  const sql = `INSERT INTO reservations ( date, shelter_name, first_name, last_name, Gender, shelter_id) VALUE ( ?, ?, ?, ?, ?, ?)`

  db.query(sql, [ date, shelter_name, first_name, last_name, Gender, shelter_id ], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }res.json({
      message: 'Reservation created',
      results
    })
    })
})

  router.post('/shelter', (req, res, next) => {
    const name = req.body.name
    const address = req.body.address
    const phone = req.body.phone
    const days_open = req.body.days_open
    const hours_open = req.body.hours_open
    const hours_closed = req.body.hours_closed
    const bed_option = req.body.bed_option
    const open_beds = req.body.open_beds
    const total_beds = req.body.total_beds
    const meal_option = req.body.meal_option

    const sql = `
      SELECT * FROM shelters WHERE name = ? AND address = ? AND phone = ? AND days_open = ? AND hours_open = ? AND hours_closed = ? AND bed_option = ? AND open_beds =? AND total_beds = ? AND meal_option = ?
    `

    db.query(sql, [name, address, phone, days_open, hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option], (err, results, fields) => {
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
        SELECT * FROM shelters WHERE name = ? AND password = ?
        `

        db.query(sql, [name, password], (err, results, fields) => {
          if (results.length > 0) {
            const token = jwt.sign({ name: name, id: results[0].id }, config.get('secret'))

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
