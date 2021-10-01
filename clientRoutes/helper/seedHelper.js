const users=require('../../helpers/userData'),
        db=require('../../models/index'),
        products=require('../../helpers/productData');

        exports.addProducts=(req,res)=>{
            db.products.remove({})
            db.products.insertMany(products)
           .then(products=>res.json(products))
           .catch(err=>res.json(err))
         };

         exports.addUsers=(req,res)=>db.User.insertMany(users)
         .then(users=>res.json(users))
         .catch(err=>res.send(err))


     module.exports=exports;