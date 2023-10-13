import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "../backend/routes/auth.route.js"
import cors from "cors"
dotenv.config()

const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("data base is connected")

    }catch (error){console.log(error)}
}
dbConnect()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/user", userRouter)
app.use( authRouter)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
     success: false,
     statusCode,
     message,
    
    });
})
const PORT = 4000
app.listen(PORT,()=> console.log(`Server is running an PORT ${PORT}`))


