const express = require("express")
const app = express()

const Comment = require("../models/Comment")
const Tweet = require("../models/Tweet")
// app.post('/', async (req, res)=>{
//     console.log(req.user)

//     try{
//         const comment = await new Comment({
//             ...req.body,
//             date: new Date(),
//             tweet: id
//         })

//         comment.save(async (err, tweet) => {
//             if (comment){
//                 const getTweet = await Tweet.findById( id)
//                 getTweet.comments.push(comment._id)
//                 getTweet.save()
//                 console.log("gettweet", getTweet)

//                 res.json(comment)
//                 return
//             }
//             console.log(err)
//             res.status(500).json({ error: err })
//         })
//     }catch (err) {
//         console.log(err)
//         res.status(500).json({ error: err })
//     }
// })



module.exports = app