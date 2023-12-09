import mongoose from 'mongoose';
import LoginModel from '../Models/data.js';
import bcrypt from 'bcrypt'
import exp from 'constants';
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'




export const Login = async(req,res)=>{
   var data = req.body;
   var req1 = {"username" : data.username};
   var req2 = {"email":data.username}
   var password = data.password;
   var user1 = await LoginModel.find(req1);
   var user2 = await LoginModel.find(req2);
  //  var user ;
  // console.log("data",data)
  // console.log("user1",user1);
  // console.log("user2",user2);
   if(Object.entries(user1).length == 0 && Object.entries(user2).length == 0){
       return res.status(200).json({status:"User doesn't exist ",username:""});
   }
   if(Object.entries(user1).length == 1){
    // console.log(1);
      var user = user1;
   }else if(Object.entries(user2).length == 1){
      var user = user2;
      //  console.log(2);
   }else{
      return res.status(200).json({status:"User doesn't exist ",username:""});
   }
   
  //  console.log(user[0].password);
   if(await bcrypt.compare(password,user[0].password)){
      return res.status(200).json({status:"Login Successfully as",username:user[0].username});
   }else{
      return res.status(400).json({status:"Incorrect Id or Password ",username:""});
   }
   
}
export const Register = async(req,res)=>{
       var data = req.body;
      var password = data.password;
      var hashPassword =  await bcrypt.hash(password,10);
       var newData = {"username" : data.username,"email":data.email,"password": hashPassword}
       var q1 = {"username" : data.username};
       var q2 = {"email":data.email};
      var data = new LoginModel(newData);
      var status1 = await LoginModel.find(q1);
      var status2 = await LoginModel.find(q2);



        if(Object.entries(status1).length >= 1 ){
            return res.status(200).json({status:"Username already exist "});
        }else if(Object.entries(status2).length >= 1 ){
             return res.status(200).json({status:"email already exist "});
        }else{
             var status = data.save();
             try{
              return res.status(200).json({status:"Successfully Registered "});
             } catch(error){
              return res.status(400).json({status:error.message});
             }
        }
}

export const Home = async(req,res)=>{

  return res.status(200).send("Welcome to Home");
}