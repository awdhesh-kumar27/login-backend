import express from 'express'
import mongoose from 'mongoose'
import Router from './Routes/routes.js'
import bodyParser from 'body-parser';
import connection from './Database/db.js';
import cors from 'cors'
import cookieparser from 'cookie-parser';

import { LoggedIn } from './Middleware/LoggedIn.js';
import dotenv from 'dotenv';
const app = express();
const PORT = 2222 || process.env.PORT
mongoose.set('strictQuery',true)


app.use(cookieparser());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Router)









//  app.get('/',function(req,res){
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//      res.sendFile(__dirname + '/form.html');
// })



app.listen(PORT,()=>{
    console.log("successfully connected at",PORT);
})

connection();
