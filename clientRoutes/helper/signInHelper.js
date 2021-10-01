const db=require('../../models'),
        token=require('../../utils'),
        bcrypt=require('bcryptjs');
        exports.signIn=(req,res)=>db.User.findOne({ email:req.body.email})
        .then(user=>{
              if(user){
                    if(bcrypt.compareSync(req.body.password,user.password)){
                          res.json({
                                _id:user._id,
                                name:user.name,
                                email:user.email,
                                isAdmin:user.isAdmin,
                                token:token.generateToken(user)
                          });
                          return 
                    }
              }
              res.status(401).json({
                    msg:'Invalid email or password'
              })
        });

        module.exports=exports;