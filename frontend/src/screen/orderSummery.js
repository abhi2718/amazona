import React ,{Component} from 'react';
import {connect} from 'react-redux';
import CheckOutStep from '../components/checkOutStep';
import {orderSummaryFun} from '../store/orderSummaryAction';
import Payment from '../screen/paymentScreen';
import {Link} from 'react-router-dom';
const steps={
    step1:true,
    step2:true,
    step3:true,
}
class OrderSummary extends Component{
    constructor(props){
        super(props);
        if(!this.props.userInfo){
            this.props.history.push('/signin');
        }
        this.paymentHandler=this.paymentHandler.bind(this);
    }
    paymentHandler(){
        this.setState({isPaid:true});
        steps.step4=true;
    }
    componentDidMount(){
        this.props.orderSummaryFun(this.props.match.params.id);
    }
     render(){
        const {isOrderFound,msgContainer}=this.props.order;
        const order= this.props.order.order;
        return(
               <div>
                { 
                  isOrderFound?
                  <div>
                    {
                       order.payment.isPaid?<CheckOutStep {... steps} step4={true}/>
                        :<CheckOutStep {... steps} />
                    }
                  <h2 style={{textAlign:'center'}}>Order Details</h2>
                  <div className='row top'>
                  <div className='col-2'>
                    <ul>
                        {   
                            order.payment.isPaid?
                            <div>
                                <li>
                                <div className='card card-body'>
                                  <p>You Successfully Placed Your Order</p>
                                  <p><strong>Order Id :-</strong> {this.props.match.params.id}</p>
                                  <p><strong>Order placed at :-</strong> {order.createdAt.substring(0,10)}</p>
                                  <p><strong>Status :-
                                      {
                                           order.payment.isPaid?<span> Paid</span>:<span>Not Paid</span>
                                      }
                                      </strong>
                                  </p>
                                </div>
                             </li>
                            </div>
                         
                            :null
                        }
                        <li>
                            <div className='card card-body'>
                               <h3>Shipping </h3>
                               <p>
                                   {
                                       <div>
                                           {
                                               order.shippingAddress.fullName
                                           },
                                           {
                                               order.shippingAddress.address
                                           },
                                           {
                                               order.shippingAddress.city
                                           }<br/>
                                           {
                                              order.shippingAddress.postalCode
                                           }
                                       </div>
                                   }
                               </p>
                            </div>
                        </li>

                        <li>
                            <div className='card card-body'>
                               <h3>Order Items </h3>
                               {
                                    order.orderItems.map(item=>(
                                  <div className='row' style={{margin:'1rem 0.3rem'}}>
                                     <img style={{width:'6rem',height:'6rem'}} src={item.image} alt={item.name} />
                                  <div className='productName'>
                                  <Link to={`/product/${item.product_Id}`} >{item.name}</Link>
                                  </div>
                                 <div>
                                 {item.qty} x {item.price} = &#8377; {item.qty*item.price}
                               </div>
                              </div>
                             ))
                               }
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    {
                        !order.payment.isPaid?
                        <div className='card card-body'>
                        <ul>
                            <li>
                                <h3>Order Sumarry</h3>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Items</div>
                                    <div>&#8377; {order.itemsPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Shipping</div>
                                    <div>&#8377;0</div>
                                </div>
                            </li>

                            <li>
                                <div className='row'>
                                    <div>Tax</div>
                                    <div>&#8377; {order.taxPrice}</div>
                                </div>
                            </li>

                            <li>
                                <div className='row'>
                                    <div>
                                       <strong>
                                            Order Total
                                       </strong>
                                    </div>
                                    <div>
                                        <strong>
                                        &#8377; {order.totalPrice}
                                        </strong>
                                    </div>
                                </div>
                            </li>
                          <li>
                             <Payment paymentHandler={this.paymentHandler} order_id={this.props.match.params.id} />
                          </li>
                           
                        </ul>
                    </div>
                        
                        :null
                    }
                      
                </div>
            </div>

                  </div>
                  :null
                }
               <div>
                    {
                       msgContainer?<p style={{
                            textAlign:'center',
                            backgroundColor:'red',
                            color:'white',
                            opacity:0.8,
                            borderRadius:'10px',
                            color:'#fff',
                            padding:'10px',
                            margin:'10px',
                        }}>Order does not found<Link to='/' style={{marginLeft:'10px',color:'white'}}>Go Shopping</Link></p>
                        :null
                    }
                </div>
            </div>
        );
    }
};
const mapStateToProps=state=>({
    order:state.orderSummary,
    userInfo:state.signIn.userInfo
})
export default connect(mapStateToProps,{orderSummaryFun}) (OrderSummary);