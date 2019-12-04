const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
  const sql = `
    SELECT s.id, s.name, s.address, s.bed_option, s.open_beds, s.total_beds, s.meal_option
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

module.exports = router 