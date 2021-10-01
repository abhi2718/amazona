export const USER_PROFILE_REQUEST='USER_PROFILE_REQUEST';
export const USER_PROFILE_FAIL='USER_PROFILE_FAIL';
export const USER_PROFILE_SUCCESS='USER_PROFILE_SUCCESS';

 const userProfileRequestHolder=()=>({type:USER_PROFILE_REQUEST})
 const userProfileRequestSuccess=(payload)=>({type:USER_PROFILE_SUCCESS,payload})
 const userProfileRequestFail=(payload)=>({type:USER_PROFILE_FAIL,payload})

const getProfile=(id)=>{
    return (dispatch)=>{
            dispatch(userProfileRequestHolder());
            fetch(`/api/user/${id}`)
            .then(res=>{
                let promise=res.json();
                if(res.ok){
                   
                    promise.then(user=>dispatch(userProfileRequestSuccess(user)))
                }else{
                    alert('fail')
                    promise.then(msg=>dispatch(userProfileRequestFail(msg))) 
                }
            })
    }
}
//----------------------------------- Updating The Profile Of User ---------------------------------------------------
export const USER_PROFILE_UPDATE_REQUEST='USER_PROFILE_UPDATE_REQUEST';
export const USER_PROFILE_UPDATE_FAIL='USER_PROFILE_UPDATE_FAIL';
export const USER_PROFILE_UPDATE_SUCCESS='USER_PROFILE_UPDATE_SUCCESS';

const handleProfileUpdateRequest=()=>({type:USER_PROFILE_UPDATE_REQUEST});
const handleProfileUpdateSuccess=(updatedUser)=>({type:USER_PROFILE_UPDATE_SUCCESS,payload:updatedUser});
const handleProfileUpdateFail=(errMsg)=>({type:USER_PROFILE_UPDATE_FAIL,payload:errMsg});
const logIn=(user)=>({
    type:"USER_SIGN_SUCCESS",
    payload:user
});

export const updateProfile=(update,id)=>{
    return dispatch =>{
         dispatch(handleProfileUpdateRequest());
          fetch(`/api/user/${id}`,{
            method:"PUT",
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:JSON.stringify(update)
        })
        .then(res=>{
            let promise=res.json();
            if(res.ok){
                 promise.then(updatedUser=>{
                     dispatch(handleProfileUpdateSuccess(updatedUser));
                     dispatch(userProfileRequestSuccess(updatedUser));
                     dispatch(logIn(updatedUser));
                     localStorage.setItem('userInfo',JSON.stringify(updatedUser))
                    })
            }else{
                promise.then(errMsg=>dispatch(handleProfileUpdateFail(errMsg)))
            }
        })
    }
}

export default getProfile;