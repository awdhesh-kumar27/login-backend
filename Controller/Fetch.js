import mongoose from 'mongoose';
import LoginModel from '../Models/data.js';
import bcrypt from 'bcrypt'
import exp from 'constants';
import { Settoken,Gettoken } from './auth.js';
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'

export const LoggedOut = async(req,res)=>{
    res.clearCookie("Token");
    return res.status(200).json({message:"User Logged Out ",username:"NULL"});
}
export const UserHome = async(req,res)=>{
   var data = req.user;
   // console.log(data);
   // console.log(req.user);
   var req1 = {"email":data.email}
   var user1 = await LoginModel.find(req1);
   if(Object.entries(user1).length == 0 && Object.entries(user2).length == 0){
      return res.status(400).json({message:"User doesn't exist ",username:"NULL"});
  }
   return res.status(200).json({message:"User at homepage ",username:user1[0].username});
}

export const Login = async(req,res)=>{
   var data = req.body;
   var req1 = {"username" : data.username};
   var req2 = {"email":data.username}
   var password = data.password;
   // console.log(data);
   var user1 = await LoginModel.find(req1);
   var user2 = await LoginModel.find(req2);
  //  var user ;
//   console.log("data",data)
//   console.log("user1",user1);
//   console.log("user2",user2);
   if(Object.entries(user1).length == 0 && Object.entries(user2).length == 0){
       return res.status(200).json({message:"User doesn't exist ",username:""});
   }
   if(Object.entries(user1).length == 1){
    // console.log(1);
      var user = user1;
   }else if(Object.entries(user2).length == 1){
      var user = user2;
      //  console.log(2);
   }else{
      return res.status(200).json({message:"User doesn't exist ",username:""});
   }
   
  //  console.log(user[0].password);
   if(await bcrypt.compare(password,user[0].password)){
      user1 = {_id : user[0]._id,email : user[0].email};
      const token = Settoken(user1);
      // res.cookie("token",token);
      res.cookie("Token", token, { expires: new Date((new Date()).getTime() + (10 * 86400000)), httponly:true });
      return res.status(200).json({message:"Login Successfully as",username:user[0].username,token:token});
   }else{
      return res.status(400).json({message:"Incorrect Id or Password ",username:""});
   }
   
}
export const Register = async(req,res)=>{
       var data = req.body;
      var password = data.password;

       var newData = {"username" : data.username,"email":data.email,"password": password}
       var q1 = {"username" : data.username};
       var q2 = {"email":data.email};
      var data = new LoginModel(newData);
      var status1 = await LoginModel.find(q1);
      var status2 = await LoginModel.find(q2);



        if(Object.entries(status1).length >= 1 ){
            return res.status(200).json({message:"Username already exist "});
        }else if(Object.entries(status2).length >= 1 ){
             return res.status(200).json({message:"email already exist "});
        }else{
             var status = data.save();
             try{
              return res.status(200).json({message:"Successfully Registered "});
             } catch(error){
              return res.status(400).json({message:error.message});
             }
        }
}

export const Home = async(req,res)=>{

  return res.status(200).send("Welcome to Home");
}