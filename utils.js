let jwt=require('jsonwebtoken');
 const generateToken=(user)=>{
  return jwt.sign({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin
  },process.env.JWT_SECRET,{
      expiresIn:'30d'
  })
};
const isAuth=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(authorization){
        const token=authorization.slice(5,authorization.length);
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                console.log({msg:'Invalid Token'})
                res.status(401).send({msg:'Invalid Token'});
            }else{
                req.user=decode;
                next();
                console.log(decode);
            }

        })
    }else{
        res.status(401).send({msg:'No Token'});
        console.log({msg:'No Token'});
    }

}
module.exports.generateToken=generateToken;
module.exports.isAuth=isAuth;
