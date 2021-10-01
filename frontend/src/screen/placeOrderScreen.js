import React,{Component} from 'react';
import CheckOutStep from '../components/checkOutStep';
import {connect}   from 'react-redux';
import {Link} from 'react-router-dom';
import {placeOrder,resetOrder} from '../store/placeOrderAction';

const steps={
    step1:true,
    step2:true,
    step3:true
}
class PlaceOrderScreen extends Component{
    constructor(props){
        super(props);
        
        if(!this.props.userInfo){
            this.props.history.push('/signin');
        }else{
            if(this.props.cartItem.length===0){
                this.props.history.push('/cart');
            }
        }
        this.postOrder=this.postOrder.bind(this);
    }
    postOrder(itemsPrice,shippingPrice,taxPrice,totalPrice){
        this.props.placeOrder({...this.props,itemsPrice,shippingPrice,taxPrice,totalPrice});
    }
   
    render(){
        let {shippingAddress,cartItem}=this.props;
        if(this.props.order){
            this.props.resetOrder();
            this.props.history.push(`/ordersummery/${this.props.order._id}`);
        }
        let cartItems=cartItem.map(item=>(
            <div className='row' style={{margin:'1rem 0.3rem'}}>
              <img style={{width:'6rem',height:'6rem'}} src={item.image} alt={item.name} />
               <div className='productName'>
                   <Link to={`/product/${item.pid}`} >{item.name}</Link>
               </div>
               <div>
                 {item.qty} x {item.price} = &#8377; {item.qty*item.price}
              </div>
            </div>
        ));
        let itemsPrice=cartItem.reduce((ac,item)=>{
                      return ac+(item.price * item.qty)
                 },0);
        let shippingPrice=itemsPrice>500?0:10;
        let taxPrice= 0.15*itemsPrice; //15% tax   
        let totalPrice=itemsPrice + shippingPrice +taxPrice; 
            
        return(
            <div>
            <CheckOutStep {...steps} />
            <div className='row top'>
                <div className='col-2'>
                    <ul>
                        <li>
                            <div className='card card-body'>
                               <h3>Shipping </h3>
                               <p>
                                   {
                                       shippingAddress?<div>
                                           {
                                               shippingAddress.fullName
                                           },
                                           {
                                               shippingAddress.address
                                           },
                                           {
                                               shippingAddress.city
                                           }<br/>
                                           {
                                               shippingAddress.postalCode
                                           }
                                       </div>:null
                                   }
                               </p>
                            </div>
                        </li>

                        

                        <li>
                            <div className='card card-body'>
                               <h3>Order Items </h3>
                                {
                                 cartItems
                                }
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                      <div className='card card-body'>
                          <ul>
                              <li>
                                  <h3>Order Sumarry</h3>
                              </li>
                              <li>
                                  <div className='row'>
                                      <div>Items</div>
                                      <div>&#8377; {itemsPrice}</div>
                                  </div>
                              </li>
                              <li>
                                  <div className='row'>
                                      <div>Shipping</div>
                                      <div>&#8377; {shippingPrice}</div>
                                  </div>
                              </li>

                              <li>
                                  <div className='row'>
                                      <div>Tax</div>
                                      <div>&#8377; {taxPrice}</div>
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
                                          &#8377; {totalPrice}
                                          </strong>
                                      </div>
                                  </div>
                              </li>

                              <li>
                                  <button 
                                  type='button' 
                                  className='primary'
                                  style={{
                                       width:'100%'
                                  }}
                                  onClick={()=>this.postOrder(itemsPrice,shippingPrice,taxPrice,totalPrice)}
                                  >
                                      Place Order
                                  </button>
                              </li>
                          </ul>
                      </div>
                </div>
            </div>
       </div>
        );
    }
}

const mapStateToProps=(state)=>({
    shippingAddress:state.shippingAddress.shippingAddress,
    paymentMethod:state.paymentMethod.paymentMethod,
    cartItem:state.cart.cartItem,
    userInfo:state.signIn.userInfo,
    order:state.order.order
   
})
export default connect(mapStateToProps,{placeOrder,resetOrder}) (PlaceOrderScreen);