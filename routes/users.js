const express = require("express")
const app = express()

const User = require("../models/User")

app.post('/', async (req, res)=>{

    const user = new User({
        ...req.body,
        birthday: new Date(req.body.birthday)
    })

    user.save((err, user)=>{
        if(err){
            res.status(500).json({error: err})
            return
        }
        res.json(user)
    })
})


module.exports = app