let mongoose=require('mongoose'),
    userSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false,
            required:true
        }
    },{
        timestamps:true
        // this will create two field createdAt and updatedAt
    }
);
let User=mongoose.model('User',userSchema);

module.exports=User;
