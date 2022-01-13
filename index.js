const express =  require("express")
const app = express()
const port = 5000
const {dataBaseConnect} = require('./config/dataBase')
const usersRoutes = require("./routes/users")

app.use(express.json())
dataBaseConnect()
app.use('/users', usersRoutes)

app.listen(port,() =>{
    console.log(`Server running on port ${port}`)
} )