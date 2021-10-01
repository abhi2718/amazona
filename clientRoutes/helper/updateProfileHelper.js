const db=require('../../models'),
bcrypt=require('bcryptjs');

exports.updateProfile=(req,res)=>{
    const validation=()=>{
      if(req.body.password==""){
         return{
           name:req.body.name,
           email:req.body.email
         }
      }
      return {
        ...req.body,
        password:bcrypt.hashSync(req.body.password,8)
      };
    }
    db.User.findByIdAndUpdate(req.params.id,validation(),{new:true})
   .then(user=>res.json(user))
   .catch(err=>res.status(402).json({errMsg:"User Does Not Found "}))
      }

      module.exports=exports;