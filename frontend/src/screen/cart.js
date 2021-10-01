import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
const Cart=({item,addToCart,removeFromCart})=>(
           <div className='item'>
               <img className='small' src={item.image} alt={item.name} />
               <div className='productName'>
                   <Link to={`/product/${item.pid}`} >{item.name}</Link>
               </div>
               <div>
                   <select value={item.qty} onChange={e=>addToCart(item.pid,Number(e.target.value))}>
                      {
                          [...Array(item.countInStock).keys()].map(x=>(
                              <option value={x+1} >{x+1}</option>
                          ))
                      }
                   </select>
               </div>
              <div>
                 &#8377;{item.price}
              </div>
              <button type='button' onClick={()=>removeFromCart(item.pid)}>Delete</button>
           </div>
);

export default Cart;