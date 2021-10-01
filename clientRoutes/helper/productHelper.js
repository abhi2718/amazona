 const db=require('../../models/index');

 exports.getProducts=(req,res)=>db.products.find({})
.then(products=>res.json(products))
.catch(err=>res.send(err))

exports.getProduct=(req,res)=>db.products.findById(req.params.id)
.then(product=>res.json(product))
.catch(err=>res.send(err))

module.exports=exports;