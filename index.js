import express from 'express'
import mongoose from 'mongoose'
import expressLayouts from 'express-ejs-layouts';
import Router from './Routes/routes.js'
import bodyParser from 'body-parser';
import connection from './Database/db.js';
import cors from 'cors'
// import path from 'path';
// import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
const app = express();
app.use(express.static('public'));
app.use(expressLayouts);
const PORT = 2222 || process.env.PORT
mongoose.set('strictQuery',true)
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Router)



app.set('layout','./Layouts/main');
app.set('view engine','ejs');



//  app.get('/',function(req,res){
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//      res.sendFile(__dirname + '/form.html');
// })



app.listen(PORT,()=>{
    console.log("successfully connected at",PORT);
})

connection();
