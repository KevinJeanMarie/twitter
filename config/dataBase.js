const mongoose = require("mongoose")

const dataBaseConnect = ()=>{
    const dataBaseName = 'twitter'
    const dbURL = `mongodb+srv://kevinhanaa:kevinhanaa@cluster0.retbu.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`

try {
    mongoose.connect(dbURL)
    console.log(`connected to ${dataBaseName} database`)
}catch (err){
    console.log(err)
}
}

module.exports = {
    dataBaseConnect
}