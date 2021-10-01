import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart,removeFromCart} from '../store/cartActionCreator';
import Cart from './cart';
import './cartList.css';
class CartList extends Component{
    constructor(props){
        super(props);
        this.checkoutHandler=this.checkoutHandler.bind(this);
        this.id=this.props.match.params.id;
        this.qty=this.props.location.search?Number(this.props.location.search.split('=')[1]):1;
        if(this.id){
            this.props.addToCart(this.id,this.qty)
         }
    }
    checkoutHandler(){
        this.props.history.push('/signin?redirect=shipping');
    }
    render(){
        const {cartItem}=this.props;
        const cartItems=cartItem.map(item=>(
            <Cart item={item} key={item.pid} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        ))
        return(
            <main>
             <div className='row top'>
              <div className='cartItem '>
                <h2 style={{textAlign:"center"}}>Shopping Cart</h2>
                {
                    cartItem.length===0?
                    <p className='messageBox'>Cart is empty <Link to='/'>Go Shopping</Link> </p>
                    :<div>
                        {cartItems}
                    </div>
                }
              </div>
              {
                  cartItem.length===0?null:
                 <div className='cartAction'>
                  <div className='card card-body'>
                      <ul>
                          <li>
                              <h4>
                                  Subtotal :- {cartItem.reduce((ac,item)=>{ return ac+item.qty},0)} items
                                   :&#8377; {cartItem.reduce((ac,item)=>{
                                        return ac+(item.price * item.qty)
                                   },0)} 
                                 
                              </h4>
                          </li>
                          <li>
                              <button className='primary  block'  onClick={this.checkoutHandler} type='button'>Proceed to Checkout</button>
                          </li>
                      </ul>
                  </div>
                 </div>
               }
             </div>
           </main>
        )
    }
};
const mapStateToProps=(state)=>({
    cartItem:state.cart.cartItem
})

export default connect(mapStateToProps,{addToCart,removeFromCart})(CartList);