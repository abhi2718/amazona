const db=require('../../models/index');
exports.getOrder=(req,res)=>{
    db.Order.findById(req.params.id)
   .then(order=>res.json(order))
   .catch(err=>res.status(400).json({msg:'Order does not found'}))
}

module.exports=exports;