const express = require("express")
const app = express()
const multer = require("multer")
const moment = require("moment")
const User = require("../models/User")
const fs = require("fs")

const upload = multer({ dest: 'public' })

app.post('/:id', upload.single('photo'), async (req, res) => {
    const { id } = req.params
    const { originalname, destination, path} = req.file
    const date = moment().format('DD-MM-YYYY')
    const fileName = `${date}-${originalname}`
    fs.renameSync(path, `${destination}/${fileName}`)
    
    try{
        const user = await User.findOneAndUpdate(
            { _id: id },
            { ...req.file },
            { new : true}
        ).exec()
        console.log("user",user)
        user.profile_picture = `http://localhost:5000/${fileName}`
        await user.save()

        res.json({ success: "File uploaded" })
    }catch (err){
        res.status(500).json({error: err})
    }
})

module.exports = app