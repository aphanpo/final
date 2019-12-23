const router = require("express").Router()
const db = require('../db')
const axios = require('axios')

router.get("/", (req, res, next) => {
  let returnArr = []
  const sql = `
  SELECT s.id, s.name, s.address, s.email, s.phone, s.days_open, s.hours_open, s.hours_closed, s.bed_option, s.open_beds, s.total_beds, s.meal_option
  FROM shelters s
  `

  db.query(sql, (err, results, fields) => {
    // res.json(results)
    results.forEach(shelter => {
      // console.log("Hello")
      const sql1 = `SELECT count(id) FROM reservations WHERE shelter_id = ?`
      db.query(sql1, [shelter.id], (err, results, fields) => {
        if (err) {
          console.log(err)
        }
        if (results) {
          shelter.reservations = results[0]['count(id)']
          returnArr.push(shelter)
        }
      })
    })
  })
  setTimeout(() => {
    res.json(returnArr)
  }, 1000)
})

router.put("/updating", (req, res, next) => {
  const address = req.body.updateAddress
  const phone = req.body.phone
  const bed_option = req.body.bed_option
  const open_beds = req.body.update_open_beds
  const total_beds = req.body.total_beds
  const meal_option = req.body.meal_option
  const days_open = req.body.days_open
  const hours_open = req.body.hours_open
  const hours_closed = req.body. hours_closed
  const name = req.body.name
  // console.log(address, phone)

  const sql = `
    UPDATE shelters 
    SET address = ?, phone = ?, days_open = ?, hours_open = ?, hours_closed = ?, bed_option = ?, open_beds = ?, total_beds = ?, meal_option = ? 
    WHERE name = ?
  `

  db.query(sql, [address, phone, days_open,hours_open, hours_closed, bed_option, open_beds, total_beds, meal_option, name], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json({
      message: 'Updated profile',
      results
    })
  })
})

// router.get("/getReservations", (req, res, next) => {
//   const date = req.body.date
//   const shelter_name = req.body.shelter_name
//   const sql = `
//   SELECT r.id, r.date, r.first_name, r.last_name, r.Gender
//   FROM reservations r
//   `

//   db.query(sql, (err, results, fields) => {
//     if (results) {
//       let homeless = results.filter(people => people.id)
//       homeless = homeless.map(people => {
//         console.log(results, "hleo")
//         return { ...people}
//       })
//       res.json(homeless)
//     } else {
//       res.json([])
//     }
//   })
// })

// router.get("/bedcount", (req, res, next) => {
//   const sql = `
//   SELECT id, open_beds FROM shelters WHERE id=?
//   `
//   db.query(sql,[id],(err, results, fields) =>{
//     res.json(results[0])
//   })
//   bedcount.push(open_beds)
//   res.json(open_beds)
// })
// router.get('/reduce_bed_count', (req, res, next) => {
//   const id = req.query.id
//   const beds = Number(req.query.beds) - 1
//   console.log(typeof beds)
//   console.log(beds)

//   const sql = `SELECT id, open_beds FROM shelters WHERE id = ? AND open_beds = ?`
//   db.query(sql, [beds, id], (err, results, fields) => {
//     if (err) {
//       console.log(err)
//     }
//     res.json(results)
//   })
// })
router.get("/other_shelters", (req, res, next) => {
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=open+homeless+shelters+that+are+not+closed+in+Las+Vegas&key=AIzaSyASjRHhAeoENVs6goGcXt6fDVfq6C5rYmc').then(resp => {
    exprts = []
    resp.data.results.forEach(element => {
      exprts.push(element)
    })

    res.json(exprts)
  })
})

module.exports = router 