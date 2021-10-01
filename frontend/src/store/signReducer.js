import {USER_SIGN_SUCCESS,USER_SIGN_FAIL,USER_LAGOUT} from './signActionCreator';

const initialState={
    userInfo:null,
    errMsg:null,
    isUserLogIn:false
}

const signInReducer=(state=initialState,action)=>{
  switch(action.type){
      case USER_SIGN_SUCCESS:
          return{
              userInfo:action.payload,
              errMsg:null,
              isUserLogIn:true
          }
      case USER_SIGN_FAIL:
          return{
              errMsg:action.payload,
              userInfo:null,
              isUserLogIn:false
          }
      case USER_LAGOUT:
          return {
            userInfo:null,
            errMsg:null,
            isUserLogIn:false
        }
      default:
        return state;
  }
}
export default signInReducer;