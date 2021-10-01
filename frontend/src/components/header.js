import React from 'react';
import './styles/header.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {signOut} from '../store/signActionCreator';
import {connect} from 'react-redux';
import {logOutRegisterUser} from '../store/registerActionCreation';

function NavBar(props){
   
        const cart=useSelector(state=>state.cart);
        const {cartItem}=cart;
        const signIn=useSelector(state=>state.signIn);
        const {userInfo,isUserLogIn}=signIn
        return(
            <header className="row column">
               <div className="brand">
                <Link to="/">Amazona</Link>
               </div>
              <div>
                <Link to="/cart">Cart
                {  cartItem.length>0?
                     <span className='badge'>{cartItem.length}</span>
                    :null
                }
                </Link>
               {
                 userInfo?
                 <div className='dropdown'>
                 <Link  to='#'>{userInfo.name+' '}
                   <i class="fa fa-caret-down" aria-hidden="true"></i>
                 </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                    <br/>
                    <li>
                      <Link to='/orderHistory'>Order</Link>
                    </li>
                    <br/>
                    <li>
                    <Link to='/signin' onClick={()=>{
                         props.signOut();
                         props.logOutRegisterUser();
                        }
                      }>
                      Sign Out
                    </Link>
                    </li>
                  </ul>
                 </div>
                 :<Link to="/signin">Sign in</Link>
               }
              {
                userInfo && userInfo.isAdmin?
                <div className='dropdown'>
                  <Link to="#admin">
                    Admin  <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to='/admin/dashboard'>Dashboard</Link>
                    </li>
                    <br/>
                    <li>
                      <Link to='/admin/productlst'>Products</Link>
                    </li>
                    <br/>
                    <li>
                      <Link to='/admin/orderlist'>Orders</Link>
                    </li>
                    <br/>
                    <li>
                      <Link to='/admin/userlist'>Users</Link>
                    </li>
                    <br/>
                  </ul>
                </div>
                :null
              }
              </div>
            </header>
        )
    
}

export default connect(null,{signOut,logOutRegisterUser}) (NavBar);