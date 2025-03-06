import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
//import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';

dotenv.config();
// app config
const app=express();
const PORT= process.env.PORT || 4000
connectDB();
connectCloudinary()


//middleware 
app.use(express.json())
app.use(cors())

//API end points
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.get('/',(req,res)=>
{
    res.send("API Working")
})

app.listen(PORT,()=> {console.log(`Server running on port ${PORT}`);});