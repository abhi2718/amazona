export const EDIT_PRODUCT_REQUEST="EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_SUCESS="EDIT_PRODUCT_SUCESS";
export const EDIT_PRODUCT_FAIL="EDIT_PRODUCT_FAIL";

const handleEditReq=()=>({type:EDIT_PRODUCT_REQUEST});
const handleEditReqSuccess=data=>({type:EDIT_PRODUCT_SUCESS,payload:data});
const handleEditReqFail=err=>({type:EDIT_PRODUCT_FAIL,payload:err});
const editProduct=(data,id)=>(dispatch,state)=>{
     dispatch(handleEditReq());
     fetch(`/api/admin/${id}/edit`,{
         method:"PUT",
         headers:new Headers({
            'Content-Type':'application/json',
        }),
        body:JSON.stringify(data)
     }).then(res=>{
         let promise=res.json();
         if(res.ok){
             promise.then(editedProduct=>dispatch(handleEditReqSuccess(editedProduct)));
         }else{
            promise.then(err=>dispatch(handleEditReqFail(err)));
         }
     })
}

export default editProduct;