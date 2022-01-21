const express =  require("express")
const app = express()
const port = 5000
const session = require("express-session")
const cors = require("cors")
const {dataBaseConnect} = require('./config/dataBase')
const usersRoutes = require("./routes/users")
const commentsRoutes = require("./routes/comments")
const tweetsRoutes = require("./routes/tweets")
const authRoutes = require("./routes/auth")
const passport = require("./config/passport")

app.use(session({
    secret: 'MyAwesomeSecret', 
    resave: true, 
    saveUninitialized: false 
  }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
dataBaseConnect()
app.use('/users', usersRoutes)
app.use('/comments', commentsRoutes)
app.use('/tweets', tweetsRoutes)
app.use('/auth', authRoutes)



app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})