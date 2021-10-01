export const ORDER_SUMMARY_SUCCESS='ORDER_SUMMARY_SUCCESS';
export const ORDER_SUMMARY_FAIL='ORDER_SUMMARY_FAIL';
export const ORDER_SUMMARY_RESET='ORDER_SUMMARY_RESET';

const handleOrder=(order)=>({type:ORDER_SUMMARY_SUCCESS,payload:order});
const handleErr=(msg)=>({type:ORDER_SUMMARY_FAIL,payload:msg})

export const orderSummaryFun=(id)=>{
    return (dispatch,getState)=>{
        let token=getState().signIn.userInfo?getState().signIn.userInfo.token:null;
        return fetch(`/api/order/${id}`,{
            headers:new Headers({
                'Content-Type':'application/json',
                authorization:`Abhi ${token}`
            })
        }).then(res=>{
                   let promise=res.json();
                   if(res.ok){
                         promise.then(order=>dispatch(handleOrder(order)))
                   }else{
                         promise.then(msg=>dispatch(handleErr(msg)));
                   }
               })
    }
}

export const resetOrderSummary=()=>{
    return dispatch=>dispatch({type:ORDER_SUMMARY_RESET});
}