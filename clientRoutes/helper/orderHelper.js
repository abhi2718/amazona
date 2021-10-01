const db=require('../../models/index');

const orderHelper=(req,res)=>{
    if(req.body.cartItem.length===0){
       res.status(404).json({msg:'Your cart is empty '});
    }else{
     const order=req.body.cartItem.map(item=>{
       return {
         name:item.name,
         qty:item.qty,
         image:item.image,
         price:item.price,
         product_Id:item.pid
       }
     });
     db.Order.create({
       orderItems:order,
       shippingAddress:req.body.shippingAddress,
       paymentMethod:req.body.paymentMethod,
       itemsPrice:req.body.itemsPrice,
       taxPrice:req.body.taxPrice,
       totalPrice:req.body.totalPrice,
       user:req.body.userInfo._id
     })
     .then(order=>{
       res.json(order);
     })
     .catch(err=>res.json(err))
    }
  };

  module.exports=orderHelper;