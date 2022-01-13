const {Schema, model} = require("mongoose")

const userSchema = new mongoose.Schema({
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
        required: true,
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
    tweets:{
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    }
}, {
      timestamps: true
    })
    
    const User = mongoose.model('User', userSchema)
    
    module.exports = User
