import{v2 as cloudinary} from "cloudinary";
import productModel from '../models/productModel.js'
//function for add product
 const addProduct=async(req,res)=>{
    console.log("✅ Route Hit: /api/product/add"); // Debugging
    console.log("📦 Request Body:", req.body);
    try {

        const {name,description,price,category,subCategory,sizes,bestseller}=req.body
        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
  
        const images=[image1,image2,image3].filter((item)=> item !== undefined)

        let imagesUrl= await Promise.all(
            images.map(async(file)=>{
                let result=await cloudinary.uploader(file.path,{resourse_type:'image'});
                return result.secure_url
            })
        )
        const productData={
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller:bestseller === "true"?true:false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date:Date.now()
         }
    console.log(productData);
    const product=new productModel(productData)
    await product.save()

    res.json({ success: true, message: "Product added successfully!" });
        
    } catch (error) {
        console.error("❌ Error Adding Product:", error);
        res.status(500).json({ success: false, message: error.message });
    }

 }
 //function for listing products
 const listProducts=async(req,res)=>{
 try {
const products= await productModel.find({});
res.json({success:true,products})

    
 } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
 }
 }
 //function for removing products
 const removeProduct=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        
    } catch (error) {
        
    }

 }
 //function for single product info
 const singleProduct=async(req,res)=>{

 }
 export {addProduct,listProducts,removeProduct,singleProduct}