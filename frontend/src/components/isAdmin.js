import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
const AdminRoute=({redirect:CustomRedirect,props})=>{
    const signIn=useSelector(state=>state.signIn);
    const {userInfo}=signIn;
    console.log("hhi",props);
    return(
        <div> 
            {
              userInfo && userInfo.isAdmin?
               <CustomRedirect {...props} />
               :<Redirect to='/signin' />
            }
        </div>
    )
}

export default AdminRoute;