
import { Settoken,Gettoken } from "../Controller/auth.js";
export const LoggedIn = async(req,res,next) => {
    
    const token = req.cookies.Token;
    // console.log(req.cookies.Token);
    // return res.status(400).json({message:"valid request ",username:"valid",tokens:token});
    if(!token){
        return res.status(400).json({message:"Invalid request ",username:"dsfsad",tokens:token});
    }
    // return res.status(400).json({message:"valid request ",username:"valid",tokens:token});
    // console.log(Gettoken(token));
    req.user =  Gettoken(token);
    next();
}

// export default{
//     LoggedIn,
// }