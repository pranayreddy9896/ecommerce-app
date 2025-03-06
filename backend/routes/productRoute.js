import express from 'express';
 import {addProduct,listProducts,removeProduct,singleProduct} from '../controllers/productControllers.js';
import upload from '../middleware/multer.js';
import multer from "multer";
import path from "path";

 const productRouter=express.Router();

 productRouter.post('/add',upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1}
     ]),addProduct);
 productRouter.delete('/remove',removeProduct);
 productRouter.get('/list',listProducts);
 productRouter.get('/single',singleProduct);



 export default productRouter;