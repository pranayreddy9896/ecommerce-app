import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/useModel.js";


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//route for user login
const loginUser=async(req,res) =>{
    try {

        const{email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user doesnot exists"});
        }
        const isMatch =await bcrypt.compare(password,user.password);


        if(isMatch){
            const token =createToken(user._id)
            res.json({success:true,token})

        }
        else{
            res.json({success:false,message:"enter vaild details"})
        }
    } catch (error) {
        console.log(error);
    res.json({success:false,message:error.message})
    
        
    }

}



//route for user registerr
const registerUser=async (req,res)=>{
   try {
    const {name,email,password}=req.body;
     // checking the user existicne


     const exists=await userModel.findOne({email});
     if(exists){
        return res.json({success:false, message:"user Already exists"})
     }
     // validating email for stomrg password
     if(!validator.isEmail(email)){
        return res.json({success:false, message:"please enter vaild email"})
     }
     if(password.length<8){
        return res.json({success:false, message:"please enter a strong and above 8 chacter password"})
     }
     //hashing user password
     const salt= await bcrypt.genSalt(10);
     const hashedPassword= await bcrypt.hash(password,salt);

     const newUser=new  userModel({
        name,
        email,
        password:hashedPassword
     })
     const user=await newUser.save();
     const token=  createToken(user._id)
     res.json({success:true,token})
    
   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
    
   }

}
//route for admin login
const adminLogin=async(req,res)=>{

}

export {loginUser,registerUser,adminLogin};