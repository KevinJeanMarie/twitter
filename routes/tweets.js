const express = require("express")
const app = express()
const { verifyUser } = require("../middlewares/auth")

const Tweet = require("../models/Tweet")
const User = require("../models/User")

<<<<<<< HEAD
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
=======
app.post('/', verifyUser, async (req, res)=>{
    console.log(req.user)

    console.log(req)
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
                return
            }
            console.log(err)
            res.status(500).json({ error: err })
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
>>>>>>> 1d2d2092514c7b85714c90705b2bfb53d56dadab
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

<<<<<<< HEAD
app.post ('/:id', async (req, res) => {
    const { id } = req.params

    

} )
=======
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
>>>>>>> 1d2d2092514c7b85714c90705b2bfb53d56dadab

module.exports = app