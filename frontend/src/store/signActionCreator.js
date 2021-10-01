export const USER_SIGN_SUCCESS='USER_SIGN_SUCCESS';
export const USER_SIGN_FAIL='USER_SIGN_FAIL';
export const USER_LAGOUT='USER_LAGOUT';

const logIn=(user)=>({
    type:USER_SIGN_SUCCESS,
    payload:user
})
const logInErr=(msg)=>({
    type:USER_SIGN_FAIL,
    payload:msg
})
const logOut=()=>({
    type:USER_LAGOUT
})
export function signIn(email,password){
    return dispatch=>{
        return fetch('/api/users/signin',{
            method:"POST",
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:JSON.stringify({
                email,
                password
            })
        })
        .then(res=>{
            let promise=res.json();
            if(!res.ok){
               promise.then(msg=>dispatch(logInErr(msg)));
            }else{
                promise.then(user=>{
                    dispatch(logIn(user));
                    localStorage.setItem('userInfo',JSON.stringify(user))
                })
            }
        })
    }
}
export function signOut(){
    return dispatch=>{
         localStorage.removeItem('userInfo');
         localStorage.removeItem('shippingAddress');
         dispatch(logOut());
    }
}