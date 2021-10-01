const express=require('express'),
      port=process.env.PORT||7040,
      morgan=require('morgan'),
      clientRoutes=require('./clientRoutes'),
      adminRoutes=require('./adminRoutes'),
      path=require('path'),
      dotenv=require('dotenv');
      dotenv.config();
const app=express();
      app.use(express.json());
      app.use(express.urlencoded({extended:true}));
      app.use('/api',clientRoutes);
      app.use('/api/admin',adminRoutes);
      app.use(morgan('tiny'));
      
      app.use(express.static(path.join(__dirname, '/frontend/build')));
      app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
      );
      if(process.env.NODE_ENV === 'production'){
            app.use(express.static('frontend/build'))
        }
      app.listen(port,()=>console.log(`server is running at ${port}`));

