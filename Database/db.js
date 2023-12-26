import mongoose from 'mongoose'
mongoose.set('strictQuery', true);
import dotenv from 'dotenv';

dotenv.config()


//  YNX5BlJhcy6O4zTe
// mongodb+srv://awdheshkumarab98:<password>@cluster0.1q7jf7k.mongodb.net/
export const connection =async()=>{
    const URL = process.env.URL;
    //  console.log(URL);
    try{
        await mongoose.connect(URL,{useNewUrlParser:true}) 
        console.log("Database connected successfully");
    }
    catch(err){
       console.log("there is some error in connecting database",err.message);
    }
}

export default connection; 