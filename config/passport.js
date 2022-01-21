const passport = require("passport")
const passportLocal = require("passport-local")
const User = require("../models/User")

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {

    console.log("username",username)
    console.log("password",password)
    
    const user = await User.findOne({email: username, password: password}).exec()
    
    if (!user) {
        return done(null, false)
    }
    return done(null, user)
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async(id, done) => {

    const user = await User.findById(id).exec()

    return done(null, user)
})


module.exports = passport