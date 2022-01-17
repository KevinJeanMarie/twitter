const express = require("express")
const app = express()
const { verifyUser } = require("../middlewares/auth")

const User = require("../models/User")
const Tweet = require("../models/Tweet")
const req = require("express/lib/request")

app.post('/', async (req, res)=>{


    // try {
    //     const user = await new User({ 
    //         ...req.body, 
    //         birthday: new Date(req.body.birthday)
    //     })
    
    //     user.save((err, user) => {
    //       if (user) {
    //         res.json(user)
    //         return
    //       }
    
    //       console.log(err)
    //       res.status(500).json({ error: err })
    //     })
    // } catch (error) {
    //     console.log(err)
    //     res.status(500).json({ error: err })
    // }
})

app.get('/:id', verifyUser, async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
      // .populate('tweets', 'contents date')
      // .exec()

    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

app.get('/', verifyUser,  async (req, res) => {

  try {
    const user = await User.find()
      // .populate('tweets', 'contents date')
      // .exec()

    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

app.put('/:id', async (req, res)=>{
  const { id } = req.params

  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new : true}
    ).exec()
    console.log(user)

    res.json(user)
  }catch (err){
    res.status(500).json({error: err})
  }
})



module.exports = app