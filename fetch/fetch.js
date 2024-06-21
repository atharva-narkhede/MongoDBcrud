const express = require('express')

let mongodb = require('mongodb')

const url = require("../url")

let mcl = mongodb.MongoClient

let router = express.Router()


router.get("/", (req, res) => {
    mcl.connect(url, (err, conn) => {
        if (err) {
            console.log("connection error")

        }
        else {
            let db = conn.db("nodedb")
            db.collection('testdb').find().toArray((err, array) => {
                if (err) {
                    console.log('error in array')

                }
                else {
                    console.log('data sent')
                    res.json(array)
                    conn.close()
                }
            })
        }
    })
})

module.exports=router