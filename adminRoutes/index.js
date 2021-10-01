const express=require('express'),
      db=require('../models/index'),
      multer=require("multer"),
      router=express.Router();
      
      router.post('/create',(req,res)=>
         db.products.create(req.body)
         .then(createdProduct=>res.json(createdProduct))
         .catch(err=>res.status(404).json({err}))
      )

      router.delete('/:id/remove',(req,res)=>{
        db.products.findByIdAndRemove(req.params.id)
        .then(deletedProduct=>res.json({msg:"product is deleted"}))
        .catch(err=>res.json({msg:"product does not found "}))
      })

      router.put('/:id/edit',(req,res)=>{ console.log(req.body);
         db.products.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then(updatedProduct=>res.json(updatedProduct))
        .catch(err=>res.status(404).json({err}))
      });
      
      const storageEngine=multer.diskStorage({
        destination:(req,file,cb)=>cb(null,'../uploads'),
        filename:(req,file,cb)=>cb(null,`${Date.now()}.jpg`)
      })

      const upload=multer({storage:storageEngine});
      router.post('/upload',upload.single("image"),(req,res)=>res.send(`/${req.file.path}`))

module.exports=router;

