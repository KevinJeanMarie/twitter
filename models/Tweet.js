const {Schema, model} = require("mongoose")

const tweetSchema = new Schema({
    contents: {
        type: String
    },
    date: {
        type: Date
    },
    nbRetweets: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        Types: Schema.Types.ObjectId,
        ref: "Comment"
    }],
}, {
      timestamps: true
    })
    
    const Tweet = model('Tweet', tweetSchema)
    
module.exports = Tweet
