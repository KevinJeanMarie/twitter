const {Schema, model} = require("mongoose")

const commentSchema = new Schema({
    id: {
        type: String
    },
    contents: {
        type: String
    },
    date: {
        type: Date,
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
      timestamps: true
    })
    
    const Comment = model('Comment', commentSchema)
    
    module.exports = Comment
