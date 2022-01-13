const express =  require("express")
const app = express()
const port = 5000
const {dataBaseConnect} = require('./config/dataBase')
const usersRoutes = require("./routes/users")
const commentsRoutes = require("./routes/comment")

app.use(express.json())
dataBaseConnect()
app.use('/users', usersRoutes)

app.use('/comment', commentsRoutes)

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
} )