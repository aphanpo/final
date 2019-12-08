const router = require("express").Router()
const db = require('../db')
const axios = require('axios')

router.get("/", (req, res, next) => {
  const sql = `
    SELECT s.id, s.name, s.address, s.phone, s.bed_option, s.open_beds, s.total_beds, s.meal_option
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

router.post("/bedcount", (req, res, next) => {
  const length = bedcount.length
  const id = length - 1
  const open_beds = {
    ...req.body.open_beds,
    id
  }
  bedcount.push(open_beds)
  res.json(open_beds)
})

router.get("/other_shelters", (req, res, next) => {
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=open+homeless+shelters+in+Las+Vegas&key=AIzaSyASjRHhAeoENVs6goGcXt6fDVfq6C5rYmc').then(resp => {
    exprts = []
    resp.data.results.forEach(element => {
      exprts.push(element)
    })

    console.log(exprts)
    res.json(exprts)
  })
})

module.exports = router 