import 
{
    USER_PROFILE_REQUEST,
    USER_PROFILE_FAIL,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_FAIL,
    USER_PROFILE_UPDATE_SUCCESS
} 
from './profileScreenAction';


export const profileReducer=(state={loading:true},action)=>{
      switch(action.type){
          case USER_PROFILE_REQUEST:
              return {
                  ...state,
                  loading:true,
              }
          case USER_PROFILE_SUCCESS:
              return {
                   ...state,
                   loading:false,
                   user:action.payload
              }
          case USER_PROFILE_FAIL:
                  return {
                      ...state,
                      loading:false,
                      msg:action.payload
                  }
           default :
           return state;
      }
}
export const profileUpdateReducer=(state={loading:false},action)=>{
    switch(action.type){
            case USER_PROFILE_UPDATE_REQUEST:
            return{
               ...state,
               loading:true
            }
            case USER_PROFILE_UPDATE_SUCCESS:
            return{
                ...state,
                loading:false,
                updatedUser:action.payload
            }
            case USER_PROFILE_UPDATE_FAIL:
                return{
                    ...state,
                    loading:false,
                    errMsg:action.payload
                }
            default:
                return state;
    }

}