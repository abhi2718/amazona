import {ADD_PAYMET_METHOD} from './paymentActionCreator';

const initialState={
    paymentMethod:null
}

const paymentReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PAYMET_METHOD:
            return{
                paymentMethod:action.payload
            }
        default :
        return state   
    }
}

export default paymentReducer;