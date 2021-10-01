const db=require('../../models/index');
      Razorpay=require('razorpay');
const razorpay=new Razorpay({
    key_id:'rzp_test_YXsiwaRpNDe2mC',
    key_secret:'uap1OAtrOYadx7HFZRvtvi4C'
  });

  exports.payment=async (req,res)=>{
    const orderItem=await db.Order.findById(req.body.order_id);
    const user= await db.User.findById(orderItem.user);
    const order=await razorpay.orders.create({
     amount:(orderItem.totalPrice*100).toString(),
     currency:"INR",
     receipt:Math.random().toString(),
     payment_capture:1
   })
    res.json({...order,email:user.email,name:user.name});
  }

  exports.paymentSuccess=async (req,res)=>{
    console.log(req.body);
     db.Order.findOneAndUpdate({_id:req.body.order_id},
     { payment:{
        payment_ID:req.body.payment_Id,
        isPaid:true,
        paidAt:Date.now(),
     }},
      {new:true})
    .then(order=>res.json(order));     
}
  module.exports=exports;