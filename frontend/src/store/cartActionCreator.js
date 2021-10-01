export const CART_ADD_ITEM=' CART_ADD_ITEM';
export const CART_REMOVE_ITEM='CART_REMOVE_ITEM';
export const CART_EMPTY='CART_EMPTY';

const handleADDToCart=(p,qty)=>({
    type:CART_ADD_ITEM,
    payload:{
        name:p.name,
        image:p.image,
        price:p.price,
        countInStock:p.countInStock,
        pid:p._id,
        qty
    }
});
const handleRemoveFromCart=(id)=>({
    type:CART_REMOVE_ITEM,
    payload:id
})

export function addToCart(id,qty){
    return (dispatch,getState)=>{
        return  fetch(`/api/products/${id}`)
                .then(res=>res.json())
                .then(product=>{
                    dispatch(handleADDToCart(product,qty));
                    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
                })
    }
}

export function removeFromCart(id){
    return (dispatch,getState)=>{
                fetch('/api/order').then(res=>res.json()).then(ans=>console.log(ans));
                dispatch(handleRemoveFromCart(id));
                localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
    }
}   