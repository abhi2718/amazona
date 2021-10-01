export const ADD_PRODUCTS=' ADD_PRODUCTS';
export const GET_PRODUCT='GET_PRODUCT';

const handleProducts=(products)=>({type:ADD_PRODUCTS,products});
const handleProduct=(product)=>({type:GET_PRODUCT,product});

export function getProducts(){
    return dispatch=>{
        return   fetch('/api/products')
                .then(res=>res.json())
                .then(products=>dispatch(handleProducts(products)))
                .catch(err=>console.log(err))
    }
}

export function getProduct(id){
    return dispatch =>{
        return fetch(`/api/products/${id}`)
              .then(res=>res.json())
              .then(product=>dispatch(handleProduct(product)))
              .catch(err=>console.log(err))
    }
}