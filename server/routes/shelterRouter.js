const router = require("express").Router()
const db = require('../db')
const axios = require('axios')

router.get("/", (req, res, next) => {
  const sql = `
    SELECT s.id, s.name, s.address, s.phone, s.days_open, s.hours_open, s.hours_closed, s.bed_option, s.open_beds, s.total_beds, s.meal_option
    FROM shelters s
  `

  db.query(sql, (err, results, fields) => {
    let filtered = results.filter(shelts => shelts.id)
    filtered = filtered.map(shelts => {
        return { ...shelts}
    })
    res.json(filtered)
  }) 
})

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
router.get('/reduce_bed_count', (req, res, next) => {
  const id = req.query.id
  const beds = Number(req.query.beds) - 1
  console.log(typeof beds)
  console.log(beds)

  const sql = `UPDATE shelters SET open_beds = ? WHERE id = ?`
  db.query(sql, [beds, id], (err, results, fields) => {
    if (err) {
      console.log(err)
    }
    res.json(results)
  })
})
router.get("/other_shelters", (req, res, next) => {
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=open+homeless+shelters+that+are+not+closed+in+Las+Vegas&key=AIzaSyASjRHhAeoENVs6goGcXt6fDVfq6C5rYmc').then(resp => {
    exprts = []
    resp.data.results.forEach(element => {
      exprts.push(element)
    })

    console.log(exprts)
    res.json(exprts)
  })
})

module.exports = router 