const express = require("express")
const app = express()
const passport = require("../config/passport")
const User = require("../models/User")
const moment = require('moment');

app.post('/login', passport.authenticate("local"), (req, res) => {
  if (req.user) {
    req.logIn(req.user, err => {
      if (err) {
        console.log(err)
      } else {
        res.json(req.user)
      }
    })
  }
})

app.post('/signup', async (req, res)  => {

  const { email } = req.body
  
  try{
    const user = await User.findOne({email: email})
    
    if (user){
       res.status(409).json({ error: 'User already exists' })
    }else {
      const user = await new User({ 
        ...req.body, 
        birthday: moment(req.body.birthday).format("DD-MM-YYYY")
      })
        
      user.save((err, user) => {
        if (user) {
          res.json(user)
          return
        }
    
        console.log(err)
        res.status(500).json({ error: err })
      })
    }

  }catch(error) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

module.exports = app