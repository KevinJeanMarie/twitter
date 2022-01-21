const express = require("express")
const app = express()

const Tweet = require("../models/Tweet")
const User = require("../models/User")

app.post('/', async (req, res)=>{
    console.log(req.user)

    // try{
    //     const tweet = await new Tweet({
    //         ...req.body,
    //         date: new Date(),
    //         user: id
    //     })

    //     tweet.save(async (err, tweet) => {
    //         if (tweet){
    //             const getUser = await User.findById( id)
    //             getUser.tweets.push(tweet._id)
    //             getUser.save()
    //             // console.log("getuser", getUser)

    //             res.json(tweet)
    //             return
    //         }
    //         console.log(err)
    //         res.status(500).json({ error: err })
    //     })
    // }catch (err) {
    //     console.log(err)
    //     res.status(500).json({ error: err })
    // }
})

app.get('/:id', async (req,res)=>{
    const { id } = req.params

    try{
        const tweet = await Tweet.findById(id)

        res.json(tweet)
    } catch  (err){
        res.status(500).json({error: err})
    }
})

app.post ('/:id', async (req, res) => {
    const { id } = req.params

    

} )

module.exports = app