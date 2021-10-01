export const SHOW_ORDERLIST_REQUEST='SHOW_ORDERLIST_REQUEST';
export const SHOW_ORDERLIST_SUCCESS='SHOW_ORDERLIST_SUCCESS';
export const SHOW_ORDERLIST_FAIL='SHOW_ORDERLIST_FAIL';

const handleOrderListRequest=()=>({type:SHOW_ORDERLIST_REQUEST});
const handleOrderListSuccess=(orderList)=>({type:SHOW_ORDERLIST_SUCCESS,payload:orderList})
const handleOrderListFail=(errMsg)=>({type:SHOW_ORDERLIST_FAIL,payload:errMsg})

export const getOrderList=()=>(dispatch,getState)=>{
        dispatch(handleOrderListRequest());
        let token=getState().signIn.userInfo?getState().signIn.userInfo.token:null;
        let id=getState().signIn.userInfo._id;
        return fetch(`/api/myorder/${id}`,{
            headers:new Headers({
                'Content-Type':'application/json',
                authorization:`Abhi ${token}`
            })
        })
        .then(res=>{
            let promise=res.json();
            if(res.ok){
               promise.then(order=>dispatch(handleOrderListSuccess(order))) 
            }else{
                promise.then(msg=> dispatch(handleOrderListFail(msg)))
            }
        })
}