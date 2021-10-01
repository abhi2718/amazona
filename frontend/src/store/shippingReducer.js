import {SAVE_SHIPPING_ADDRESS} from './shippingActionCreator';

const initialState={
    shippingAddress:null
}

const shippingReducer=(state=initialState,action)=>{
  switch(action.type){
      case SAVE_SHIPPING_ADDRESS:
          return{
              shippingAddress:action.payload
          }
      default:
          return state;
  }
}

export default shippingReducer;