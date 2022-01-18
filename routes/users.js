const express = require("express")
const app = express()
const { verifyUser } = require("../middlewares/auth")

const User = require("../models/User")
const Tweet = require("../models/Tweet")

app.get('/:id', verifyUser, async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
      .populate('tweets', 'contents date')
      .exec()

    res.json(user.tweets)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

app.get('/:id/followers', verifyUser, async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
      .populate('followers', 'firstName lastName bio')
      .exec()

    res.json(user.followers)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

app.get('/:id/followings', verifyUser, async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
      .populate('followings', 'firstName lastName bio')
      .exec()

    res.json(user.followings)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }
})

app.get('/', async (req, res) => {

  try {
    const users = await User.find()
    console.log(users)

    res.json(users)
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

app.post('/:idUser/:idFollowing', async (req, res)=>{
  const { idUser, idFollowing } = req.params

  try{
    const following = await User.findById(idFollowing)
    console.log("following",following)
    following.followers.push(idUser)
    await following.save()

    const user = await User.findById(idUser)
    console.log("user",user)
    user.followings.push(idFollowing)
    await user.save()

    res.json(user)

  }catch (err){
    res.status(500).json({error: err})
  }
})

app.get('/:id/tweets', async (req, res) => {
  const { id } = req.params

})



module.exports = app