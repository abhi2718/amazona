import {CART_EMPTY} from '../store/cartActionCreator';
export const PLACE_ORDER_REQUEST_SUCCESS='PLACE_ORDER_REQUEST_SUCCESS';
export const PLACE_ORDER_REQUEST_FAIL='PLACE_ORDER_REQUEST_FAIL';
export const PLACE_ORDER_REQUEST_RESET='PLACE_ORDER_REQUEST_RESET';

const handleOrderRequestSuccess=(order)=>({type:PLACE_ORDER_REQUEST_SUCCESS,payload:order});
const handleOrderRequestFail=(msg)=>({type:PLACE_ORDER_REQUEST_FAIL,payload:msg});
const handleOrderRequestReset=()=>({type:PLACE_ORDER_REQUEST_RESET});


export const placeOrder=(order)=>{
    console.log(order)
    return (dispatch,getState)=>{
        console.log('action',order)
        let token=getState().signIn.userInfo.token;
        return fetch('/api/order',{
            method:"POST",
            headers:new Headers({
                'Content-Type':'application/json',
                authorization:`Abhi ${token}`
            }),
            body:JSON.stringify(order)
        })
        .then(res=>{
            let promise=res.json();
            if(res.ok){
                promise
               .then(order=> dispatch(handleOrderRequestSuccess(order)));
                dispatch({type:CART_EMPTY});
                localStorage.removeItem('cartItem');
            }else{
               promise.
               then(msg=>dispatch(handleOrderRequestFail(msg)));
            }
        })
         
    }
};

export const resetOrder=()=>{
    return dispatch=>{
        dispatch(handleOrderRequestReset());
    }
}
