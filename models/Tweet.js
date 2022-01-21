const {Schema, model} = require("mongoose")

const tweetSchema = new Schema({
    contents: {
        type: String
    },
    date: {
        type: Date
    },
    nbRetweets: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }],
}, {
      timestamps: true
    })
    
    const Tweet = model('Tweet', tweetSchema)
    
module.exports = Tweet
