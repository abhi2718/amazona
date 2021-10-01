export const ADD_PAYMET_METHOD='ADD_PAYMET_METHOD';

const handlePaymentMethod=(paymentMethod)=>({
    type:ADD_PAYMET_METHOD,
    payload:paymentMethod
});

 export function addPaymentMethod(paymentMethod){
    return dispatch=>{
        dispatch(handlePaymentMethod(paymentMethod))
    }
}