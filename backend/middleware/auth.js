import jwt from "jsonwebtoken"

const authMiddleWare = async (req,res,next) =>{
   const {token} = req.headers;
   if(!token){
    return res.json({success:false,message:"Not authorized login again"})
   }
   try {
    console.log('token :::',token)
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    console.log("token decoded :",token_decode);
    
    req.body.userId = token_decode.id;
    next();
     
   } catch (error) {
    console.log("Errors .",error);
    res.json({success:false,message:"error"})
   }
}

export default authMiddleWare;  