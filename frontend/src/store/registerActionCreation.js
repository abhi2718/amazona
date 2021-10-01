export const USER_REGISTRATION_SUCCESS='USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAIL='USER_REGISTRATION_FAIL';
export const USER_LOGOUT='USER_LOGOUT';

const registerSuccess=(user)=>({
    type:USER_REGISTRATION_SUCCESS,
    payload:user
});
const registerFail=(msg)=>({
    type:USER_REGISTRATION_FAIL,
    payload:msg
});
const userLogOut=()=>({
    type:USER_LOGOUT
})

export function register(name,email,password,){
    return dispatch=>{
        return fetch('/api/register',{
            method:"POST",
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res=>{
            let promise= res.json();
           if(res.ok){
               promise.then(user=>dispatch(registerSuccess(user)));
           }else{
               promise.then(msg=>dispatch(registerFail(msg)));
           }
        })

    }
}

export function logOutRegisterUser(){
    return dispatch=>{
          dispatch(userLogOut())
    }
}