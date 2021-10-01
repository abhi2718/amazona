export const GET_PRODUCT_REQUEST=' GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCESS='GET_PRODUCT_SUCESS';
export const GET_PRODUCT_FAIL='GET_PRODUCT_SUCESS';

const handleProductRequest=()=>({type:GET_PRODUCT_REQUEST});
const handleProductSuccess=(product)=>({type:GET_PRODUCT_SUCESS,payload:product});
const handleProductFail=(errMsg)=>({type:GET_PRODUCT_FAIL,payload:errMsg});
export function getProduct(id){
    return dispatch =>{
        dispatch(handleProductRequest);
        return fetch(`/api/products/${id}`)
              .then(res=>res.json())
              .then(product=>dispatch(handleProductSuccess(product)))
              .catch(err=>dispatch(handleProductFail(err)));
    }
}