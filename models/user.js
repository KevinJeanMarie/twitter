const {Schema, model }= require("mongoose")

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 4
    },
    country: {
        type: String,
    },
    language: {
        type : String,
    },
    birthday: {
        type: Date,
    },
    sexe: {
        type: String,
    },
    bio: {
        type: String,
    },
    profile_picture: {
        type: String,
    },
    tweets: [{
        publicAt : Date,
        tweet : { 
            type: Schema.Types.ObjectId,
            ref:'Tweet'
        }
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    followings: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
}, {
      timestamps: true
    })
    
    const User = model('User', userSchema)
    
module.exports = User
