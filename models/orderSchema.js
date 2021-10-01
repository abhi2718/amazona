const mongoose=require('mongoose');
 const orderSchema=new mongoose.Schema({
          orderItems:[
              {
                  name:{type:String,required:true},
                  qty:{type:Number,required:true},
                  image:{type:String,required:true},
                  price:{type:Number,required:true},
                  product_Id:{
                      type:mongoose.Schema.Types.ObjectId,
                      ref:'Products',
                      required:true
                  }
              }
          ],
          shippingAddress:{
              fullName:{type:String,required:true},
              address:{type:String,required:true},
              city:{type:String,required:true},
              country:{type:String,required:true},
              postalCode:{type:String,required:true}
          },
          payment:{
             payment_ID:{type:String},
             isPaid:{type:Boolean,default:false},
             paidAt:{type:Date},
          },
          itemsPrice:{type:Number,required:true},
          taxPrice:{type:Number,required:true},
          totalPrice:{type:Number,required:true},
          user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
          isDelivered:{type:Boolean,default:false},
          deliveredAt:{type:Date}
      },{
          timestamps:true
      });

      const Order=mongoose.model('Order',orderSchema);

      module.exports=Order;