const db=require('../../models/index');
        bcrypt=require('bcryptjs');

        exports.register=(req,res)=>{
            db.User.create({
              name:req.body.name,
              email:req.body.email,
              password:bcrypt.hashSync(req.body.password,8),
              isAdmin:false
          })
          .then(user=>res.json({...user}))
          .catch(err=>res.status(401).json({
            msg:'This email already exists'
          }));
          }

          module.exports=exports;