const express = require('express')

let mongodb = require('mongodb')

const url = require("../url")

let mcl = mongodb.MongoClient

let router = express.Router()

router.post("/", (req, res) => {
    let obj = req.body
    mcl.connect(url, (err, conn) => {
        if (err) {
            console.log("connection error")
        }
        else {
            let db = conn.db("nodedb")
            db.collection('testdb').insertOne(obj, (err) => {
                if (err) {
                    res.json({ 'insert': 'error' + err })

                }
                else {
                    console.log('Data Inserted')
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            })
        }
    })
})

module.exports = router
