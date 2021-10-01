import { GET_PRODUCT} from './actionCreator';

const productReducer=(state={product:{}},action)=>{
    switch(action.type){
        case GET_PRODUCT:
            return {
                product:action.product
            }
        default :
        return state;
    }
}

export default productReducer;