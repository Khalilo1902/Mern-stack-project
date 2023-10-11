import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGO)
        console.log("data base is connected")

    }catch (error){console.log(error)}
}
dbConnect()
const app = express()
const PORT = 4000
app.listen(PORT,()=> console.log(`Server is running an PORT ${PORT}`))