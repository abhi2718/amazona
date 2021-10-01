import {ADD_PRODUCTS} from './actionCreator';

const initialState={
    products:[]
}

const productListReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCTS:
            return {
                ...state,
                products:action.products
            }
        default:
             return state;
    }
}
export default productListReducer;