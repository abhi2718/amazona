const db=require('../../models/index');
exports.myOrder=(req,res)=>
 db.Order.find({user:req.params.id})
 .then(order=>res.json(order))
 .catch(err=>res.status(404).json({msg:'Order does not found '}))

module.exports=exports;