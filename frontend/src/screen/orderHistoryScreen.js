import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderList} from '../store/orderHistoryAction';
import LoadingBox from '../components/loadingBox';
 const OrderHistory=(props)=>{ 
    const dispatch=useDispatch();
    const {myOrders,loading,errMsg}=useSelector(state=>state.orderHistory);
    const userInfo=useSelector(state=>state.signIn.userInfo);
    useEffect(()=>{
        if(!userInfo){
            props.history.push('/signin');
         }else{
            dispatch(getOrderList());
         }
    },[dispatch,userInfo])
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Order History  </h2>
            {
                loading?<LoadingBox/>
                :errMsg?<p style={{
                    backgroundColor:'red',
                    margin:'10px',
                    textAlign:'center',
                    padding:'10px',
                    borderRadius:'10px',
                    color:'#fff'
                }}>{errMsg.msg}</p>
                :<div>
                    <div className='tablelg'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(order=>(
                                    <tr key={order._id}>
                                       <td>{order._id}</td>
                                       <td>{order.createdAt.substring(0,10)}</td>
                                       <td>&#8377;{order.totalPrice}</td>
                                       <td>{order.payment.isPaid?"Paid ":"Not Paid"}</td>
                                       <td>{order.isDelivered?"Delivered":"Not Delivered"}</td>
                                       <td>
                                           <button 
                                            type='button'
                                            onClick={()=>{
                                                props.history.push(`/ordersummery/${order._id}?status=paid`)
                                            }}>
                                               Details
                                           </button>
                                       </td>
                                    </tr>
                                ))

                                
                            }
                        </tbody>
                    </table>
                    </div>

                   <div className='tableSmall'>
                   <table className='table'>
                        
                        <tbody>
                            {
                                myOrders.map(order=>(
                                    <tr key={order._id}>
                                       <td><strong>Id</strong> :- {order._id}</td>
                                       <td><strong>Date</strong> :- {order.createdAt.substring(0,10)}</td>
                                       <td><strong>Total</strong> :- &#8377;{order.totalPrice}</td>
                                       <td><strong>Paid</strong> :- {order.payment.isPaid?`Paid {  ${order.payment.paidAt.substring(0,10)}}`:"Not Paid"}</td>
                                        <td><strong>Delivered</strong> :- {order.payment.isDelivered?"Yes":"No"}</td>
                                       <td><strong>Actions</strong> :- <button 
                                            type='button'
                                            onClick={()=>{
                                                props.history.push(`/ordersummery/${order._id}`)
                                            }}>
                                               Details
                                           </button></td>
                                    </tr>
                                ))

                                
                            }
                        </tbody>
                    </table>
                   </div>
                </div> 
            }
        </div>
    )
}
export default OrderHistory;