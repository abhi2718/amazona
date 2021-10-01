import { USER_REGISTRATION_SUCCESS,USER_REGISTRATION_FAIL,USER_LOGOUT} from './registerActionCreation';

const initialState={
    userInfo:null,
    errMsg:null
}

const registerReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_REGISTRATION_SUCCESS:
            return{
                userInfo:action.payload,
                errMsg:null
            }
        case USER_REGISTRATION_FAIL:
            return{
                userInfo:null,
                errMsg:action.payload
            }
        case USER_LOGOUT:
            return    {
                userInfo:null,
                errMsg:null
            }
            
        default:
        return state;
    }
}

export default registerReducer;