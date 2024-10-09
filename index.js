const express = require('express')
const mongoose = require('mongoose')
const port = 3010
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/exp')
    .then(()=>{
        console.log('conneted to database')
    })
    .catch((err)=>{
        console.log('error connecting to db',err)
    })



app.listen(port, ()=>{
    console.log('server is running on ',port)
})