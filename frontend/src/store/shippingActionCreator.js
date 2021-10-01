export const SAVE_SHIPPING_ADDRESS='SAVE_SHIPPING_ADDRESS';

const handleShippingAddress=data=>({
    type:SAVE_SHIPPING_ADDRESS,
    payload:data
});

export function saveShippingAddress(data){
    return dispatch=>{
        dispatch(handleShippingAddress(data));
        localStorage.setItem('shippingAddress',JSON.stringify(data));
    }
}