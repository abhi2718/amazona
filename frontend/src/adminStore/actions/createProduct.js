export const CREATE_PRODUCT_REQUEST="CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS="CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAIL="CREATE_PRODUCT_FAIL";
export const CREATE_PRODUCT_RESET="CREATE_PRODUCT_RESET";

const handleCreateProductRequest=()=>({type:CREATE_PRODUCT_REQUEST});
const handleCreateProductSuccess=createdProduct=>({type:CREATE_PRODUCT_SUCCESS,payload:createdProduct});
const handleCreateProductFail=(errMsg)=>({type:CREATE_PRODUCT_FAIL,payload:errMsg});
const CreateNewProduct=(data)=>dispatch=>{
    dispatch(handleCreateProductRequest());
    fetch('/api/admin/create',{
            method:"POST",
            headers:new Headers({
                'Content-Type':'application/json',
            }),
           body:JSON.stringify({...data})
    })
    .then(res=>{
       const promise= res.json();
       if(res.ok){
           promise.then(createdProduct=>dispatch(handleCreateProductSuccess(createdProduct)));
       }else{
           promise.then(err=>dispatch(handleCreateProductFail(err)))
       }
    }) 
}
export const deleteProduct=id=>dispatch=>{
    fetch(`/api/admin/${id}/remove`,{
        method:"DELETE"
})
.then(res=>{
   const promise= res.json();
   if(res.ok){
       promise.then(response=>console.log(response));
   }else{
    promise.then(response=>console.log(response));
   }
}) 
}


export const resetState=()=>dispatch=>dispatch({type:CREATE_PRODUCT_RESET});

export default CreateNewProduct;