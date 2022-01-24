const express = require("express")
const app = express()
const { verifyUser } = require("../middlewares/auth")

const Tweet = require("../models/Tweet")
const User = require("../models/User")

app.post('/', verifyUser, async (req, res)=>{

    try{
        const tweet = await new Tweet({
            ...req.body,
            date: new Date(),
            user: req.user._id
        })
        
        tweet.save(async (err, tweet) => {
            if (tweet){
                req.user.tweets.push(tweet._id)
                req.user.save()

                res.json(tweet)
            }
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
})

app.get('/', verifyUser, async (req,res)=>{
    const { id } = req.params

    try{
        
        const tweets= req.user.tweets
        const tweet = await Tweet.findById(tweets)
        console.log(tweet)
        res.json(tweet)
    } catch  (err){
        res.status(500).json({error: err})
    }
})

app.post('/:idUser/:idTweet', verifyUser, async (req, res) => {
    const { idUser, idTweet } = req.params

    try{
        // pour modifier le nombre de retweet
        const tweet = await Tweet.findById(idTweet)
        console.log(tweet)
        tweet.nbRetweets = tweet.nbRetweets + 1
        // console.log("nb retweett",tweet.nbRetweets)
        await tweet.save()

        // Récupération de l'id du tweet pour l'ajouter dans le tableaux tweets
        const retTweet = {
            publicAt: new Date(),
            tweet: idTweet
        } 
        const user = await User.findById(idUser)
        user.tweets.push(retTweet)
        await user.save()
        
        res.json(user)

    }catch (err){
        res.status(500).json({error: err})
    }
})

// app.get('/',  async (req, res) => {

//     try {
//       const tweet = await Tweet.find()
//         .populate('contents', '')
//         .exec()
  
//       res.json(tweet)
//     } catch (err) {
//       console.log(err)
//       res.status(500).json({ error: err })
//     }
//   })

module.exports = app