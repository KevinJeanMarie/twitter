const express =  require("express")
const app = express()
const port = 5000
const {dataBaseConnect} = require('./config/dataBase')
const usersRoutes = require("./routes/users")
const commentsRoutes = require("./routes/comments")
const tweetsRoutes = require("./routes/tweets")

app.use(express.json())
dataBaseConnect()
app.use('/users', usersRoutes)
app.use('/comments', commentsRoutes)
app.use('/tweets', tweetsRoutes)

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
} )