const db=require('../../models/index');
exports.getUser=(req,res)=>db.User.findById(req.params.id)
.then(currentUser=>res.json(currentUser))
.catch(err=>res.status(402).json({
  errMsg:"User Does Not Found"
}));

module.exports=exports;