const bcrypt=require('bcryptjs')
const users=[
    {
        name:'AdminUser',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('admin',8),
        isAdmin:true
    }
]

module.exports=users;