import {ORDER_SUMMARY_SUCCESS,ORDER_SUMMARY_FAIL,ORDER_SUMMARY_RESET} from '../store/orderSummaryAction';

const orderSummaryReducer=(state={msgContainer:false,isOrderFound:false},action)=>{
    switch(action.type){
         case ORDER_SUMMARY_SUCCESS:
             return{
                 ...state,
                 msgContainer:false,
                 isOrderFound:true,
                 order:action.payload
             }
         case ORDER_SUMMARY_FAIL:
             return{
                 ...state,
                 msgContainer:true,
                 isOrderFound:false,
                 msg:action.payload
             }
         case ORDER_SUMMARY_RESET:
             return{
                ...state,
                 msgContainer:false,
                 isOrderFound:false,
             }
        default:
            return state;
    }
};

export default orderSummaryReducer;