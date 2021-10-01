
import {SHOW_ORDERLIST_REQUEST,SHOW_ORDERLIST_SUCCESS,SHOW_ORDERLIST_FAIL} from './orderHistoryAction' ;

const orderHistoryReducer=(state={myOrders:[],loading:true},action)=>{
    switch(action.type){
        case SHOW_ORDERLIST_REQUEST:
             return{
                 ...state
             }
        case SHOW_ORDERLIST_SUCCESS:
            console.log(action.payload)
            return{
                loading:false,
                myOrders:action.payload
            }
        case SHOW_ORDERLIST_FAIL:
            return{
                loading:false,
                errMsg:action.payload
            }
        default :
        return state;
    }
}

export default orderHistoryReducer;