const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    id: {
        type: String
    },
    contents: {
        type: String
    },
    date: {
        type: Date,
    },
    tweet_id: {
        type: String,
        unique: true
    },
    user_id: {
        type: String,
    }
}, {
      timestamps: true
    })
    
    const Comment = mongoose.model('Comment', commentSchema)
    
    module.exports = Comment
