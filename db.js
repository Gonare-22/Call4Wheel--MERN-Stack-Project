const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Vaishnav:Vaishnav@2002@cluster0.4wrb3qa.mongodb.net/call4wheel-project' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose