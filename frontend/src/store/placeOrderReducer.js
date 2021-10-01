import {PLACE_ORDER_REQUEST_SUCCESS,PLACE_ORDER_REQUEST_FAIL,PLACE_ORDER_REQUEST_RESET} from '../store/placeOrderAction';

 const placeOrderReducer=(state={order:null},action)=>{
   switch(action.type){
       case PLACE_ORDER_REQUEST_SUCCESS:
       return{
           ...state, 
           order:action.payload
       }
       case PLACE_ORDER_REQUEST_FAIL:
           return {
               msg:action.payload
           }
       case PLACE_ORDER_REQUEST_RESET:
           return{
               ...state,
               order:null
           }
       default:
        return state
   }
}




export default placeOrderReducer;