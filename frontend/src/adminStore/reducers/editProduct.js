import {EDIT_PRODUCT_REQUEST,EDIT_PRODUCT_SUCESS,EDIT_PRODUCT_FAIL} from '../actions/editProduct';

export  const editProductReducer=(state={loading_edit:true},action)=>{
    switch(action.type){
       case EDIT_PRODUCT_REQUEST:
           return {...state}
        case EDIT_PRODUCT_SUCESS:
            return {
                editedproduct:action.payload,
                loading_edit:false
            }
            
        case EDIT_PRODUCT_FAIL:
            return {
                errMsg_edit:action.payload,
                loading_edit:false
            }
        default:
            return state;
    }
}