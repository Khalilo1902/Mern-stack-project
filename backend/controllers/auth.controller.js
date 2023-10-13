import User from "../models/user.models.js"
import bcrypt from "bcryptjs"

export const signup = async (req,res,next)=>{
const {username,email,password}=req.body
try {
    const hashedPassword = await bcrypt.hash(password,10)
await User.create({
    username:username,
    email:email,
    password:hashedPassword,

})
res.json("succsesfull created")
}catch(error){
   next(error)
}



}