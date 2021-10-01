import React,{useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import getProfile from '../store/profileScreenAction';
import LoadingBox from '../components/loadingBox';
import {updateProfile} from '../store/profileScreenAction';


const ProfileScreen=(props)=>{
    const signIn=useSelector(state=>state.signIn);
    const {user,loading,msg}=useSelector(state=>state.userProfile);
    const updatedUser=useSelector(state=>state.userProfileUpdated)
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
  
    useEffect(async()=>{
      if(!user){
       await dispatch(getProfile(signIn.userInfo._id));
      }else{
           setName(user.name);
           setEmail(user.email);
      }
    },[dispatch,signIn.userInfo._id,user])

    const handleSubmit=async (e)=>{
          e.preventDefault();
           if(password===confirmPassword){
                  await   dispatch(updateProfile({name,email,password},signIn.userInfo._id));
           }else{
             alert('Password and confirm password does not match ');
           }
    }
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
          {
            loading?<LoadingBox />:
            msg?<p style={{backgroundColor:'red',textAlign:'center',padding:'10px',color:'white',borderRadius:'10px'}}>{msg.errMsg}</p>:
            updatedUser.loading?<LoadingBox />:
            <div>
            <form style={{
                     backgroundColor:"white",
                     padding:"15px",
                     borderRadius:"10px",
                     margin:"50px 0",
                     maxWidth:"360px"
                 }} className='formHolder' onSubmit={handleSubmit}>
                   <h2 style={{textAlign:'center'}}>Profile</h2>
                <div>
                  <label style={{fontSize:"14px"}} htmlFor='name'>Name</label>
                  <input  style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} id='name' type='text' name='name' value={name} onChange={e=>setName(e.target.value)} />
                </div>
               <div>
                 <label style={{fontSize:"14px"}} htmlFor='email'>Email</label>
                 <input  style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} id='email' type='email' name='email'  value={email} onChange={e=>setEmail(e.target.value)}/>
               </div>
               <div>
               <label style={{fontSize:"14px"}} htmlFor='password'>Password</label>
                <input  style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} id='password' type='text' name='name' placeholder="New Password" onChange={e=>setPassword(e.target.value)}/>
               </div>
                <div>
                   <label style={{fontSize:"14px"}} htmlFor='confirm-password'>Confirm Passwordd</label>
                   <input   style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }}  id='confirm-password' type='text' name='name' placeholder="Confirm Password" onChange={e=>setConfirmPassword(e.target.value)}/>
                </div>
                <div  style={{
                        width:"330px"
                    }}>
                   <button style={{backgroundColor:'gold'}} type='submit'>Update</button>
                </div>
            </form>
            </div>
          }
        </div>
    )
}


    
export default ProfileScreen;