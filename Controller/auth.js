import jwt from 'jsonwebtoken';
const secret = "Awdjksdfjowejdfs";
export const Settoken = (user) =>{
    return jwt.sign(user,secret);
}

export const Gettoken=(token) =>{
    return jwt.verify(token,secret);
}
