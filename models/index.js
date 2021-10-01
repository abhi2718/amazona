const mongoose=require('mongoose');
      mongoose.connect('mongodb+srv://abhiwebdev:abhiwebdev@cluster0.n0u3g.mongodb.net/amazona?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
  });

  mongoose.set('debug',true);
  mongoose.Promise=Promise;

  module.exports.products=require('./productSchema');
  module.exports.User=require('./userSchema');
  module.exports.Order=require('./orderSchema');

  //process.env.MONGODB_URI  ||