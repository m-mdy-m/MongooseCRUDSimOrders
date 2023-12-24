const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , "public")))



const startServer = async ()=>{
    try{
        const url = 'mongodb://localhost:27017/MongooseCRUDSimOrders'
        await mongoose.connect(url)
    }catch(err){

    }
}