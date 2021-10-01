const express=require('express'),
      router=express.Router(),
      authorization=require('../utils'),
      seedHelper=require('./helper/seedHelper')
      productHelper=require('./helper/productHelper'),
      signInHelper=require('./helper/signInHelper'),
      orderHelper=require('./helper/orderHelper'),
      registerHelper=require('./helper/registerHelper'),
      updateProfileHelper=require('./helper/updateProfileHelper'),
      getOredrHelper=require('./helper/getOrderHelper'), 
      paymentHelper=require('./helper/paymentHelper'),
      myOrderHelper=require('./helper/myOrderHelper'),
      getUserHelper=require('./helper/getUserHelper');

      //......................All Routes...............

      router.get('/addproduct',seedHelper.addProducts);
      router.get('/products',productHelper.getProducts );
      router.get('/products/:id',productHelper.getProduct);
      router.post('/users/signin',signInHelper.signIn);
      router.post('/register',registerHelper.register);
      router.get('/users/seed',seedHelper.addUsers);
      router.put('/user/:id',  updateProfileHelper.updateProfile);
      router.post('/order',authorization.isAuth,orderHelper);
      router.get('/order/:id',authorization.isAuth, getOredrHelper.getOrder);
      router.post('/payment', paymentHelper.payment);
      router.put('/payment/success',paymentHelper.paymentSuccess);
      router.get('/user/:id', getUserHelper.getUser);
      router.get('/myorder/:id',authorization.isAuth,myOrderHelper.myOrder)
    
      module.exports=router;