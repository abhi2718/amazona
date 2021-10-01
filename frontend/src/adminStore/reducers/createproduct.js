import {
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_RESET
}  from '../actions/createProduct';

export const createProductReducer=(state={loading:true},action)=>{
    switch(action.type){
          case CREATE_PRODUCT_REQUEST:
              return{
                  ...state
              }
            case CREATE_PRODUCT_SUCCESS:
                  return{
                        loading:false,
                        product:action.payload
                  }
            case CREATE_PRODUCT_FAIL:
                return{
                    loading:false,
                    errMsg:action.payload
                }
            case CREATE_PRODUCT_RESET:
                return{
                    loading:true
                }
            default :
                return state;
    }
}