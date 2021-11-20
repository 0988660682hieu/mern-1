
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')

const connectDB = async () =>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-pr.kk1rg.mongodb.net/mern-pr?authSource=admin&replicaSet=atlas-eyycvr-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }) 
    } catch (error) {
        console.log('cant connect');
    }
}
connectDB()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server POST is ${PORT}`))