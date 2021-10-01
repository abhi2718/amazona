import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCESS,
    GET_PRODUCT_FAIL
} from '../actions/getProduct';

const getProductReducer=(state={loading:true},action)=>{
    switch(action.type){
        case GET_PRODUCT_REQUEST :
            return{
                loading:true
            }
        case GET_PRODUCT_SUCESS:
            return{
                loading:false,
                product:action.payload
            }
        case GET_PRODUCT_FAIL:
            return{
                loading:false,
                errmsg:action.payload
            }
        default :
        return state;
    }
}

export default getProductReducer;