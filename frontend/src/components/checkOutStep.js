import React from 'react';
import './styles/checkOutStep.css';
const CheckOutStep=(props)=>(
    <div className='row checkout-steps'>
     <div className={props.step1 ? 'active':''}>Sign-In</div>
     <div className={props.step2 ? 'active':''}>Shipping</div>
     <div className={props.step3 ? 'active':''}>Place Order</div>
     <div className={props.step4 ? 'active':''}>Payment</div>
    </div>
)

export default CheckOutStep;