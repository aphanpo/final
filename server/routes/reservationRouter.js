const router = require("express").Router()
const db = require('../db')
// const axios = require('axios')


router.get("/guests",(req,res,next)=>{
    // console.log(name, "blablablrouter")
    const sql = `
    SELECT date, shelter_name, first_name, last_name, shelter_id, Gender FROM reservations`

    db.query(sql, (err, results, fields)=>{
        res.json(results)
        console.log(results)
    })
})

module.exports = router