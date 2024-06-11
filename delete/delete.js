const express = require('express')

let mongodb = require("mongodb")

let mcl = mongodb.MongoClient
let router = express.Router()
const url = require('../url')

router.delete("/", (req, res) => {
    let obj = {
        "p_id": req.body.p_id
    }

    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection:- ', err)
        else {
            let db = conn.db("nodedb")
            db.collection('products').deleteOne(obj, (err, result) => {
                if (err)
                    res.json({ 'delete': 'Error ' + err })
                else {
                    if (result.deletedCount != 0) {
                        console.log("Data deleted ")
                        res.json({ 'delete': 'success' })
                    } else {
                        console.log("Data Not deleted ")
                        res.json({ 'delete': 'Record Not found' })
                    }
                    conn.close()
                }
            })
        }
    })
})


//export router
module.exports = router
