import {CART_ADD_ITEM,CART_REMOVE_ITEM, CART_EMPTY} from './cartActionCreator';

let initialState={
    cartItem:[]
}

 const  cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART_ADD_ITEM :
            let item=action.payload;
            let existItem=state.cartItem.find(x=>x.pid ===item.pid);
            if(existItem){
                return {
                    ... state,
                    cartItem:state.cartItem.map(p=> p.pid===item.pid?item:p)
                }
            }else{
                return {
                    ...state,
                    cartItem:[...state.cartItem,item]
                }
            }
            case CART_REMOVE_ITEM:
              return {
                  ...state,
                  cartItem:state.cartItem.filter(x=>x.pid!==action.payload)
              }
            case  CART_EMPTY:
                return {
                    ...state ,
                    cartItem:[]
                }  
            default :
            return state;
    }
};

export default cartReducer;