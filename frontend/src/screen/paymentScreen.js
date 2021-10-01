import {orderSummaryFun} from '../store/orderSummaryAction';
import {connect} from 'react-redux';
async function loadScript(src){
  return new Promise((resolve,reject)=>{
  const script=document.createElement('script');
          script.src=src;
          script.onload=()=>{
            resolve(true);
          };
          script.onerror=()=>{
            resolve(false);
          }
          document.body.appendChild(script);
        })
}
function Payment(props) {
  const loadingRazorpay=async ()=>{
    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js');
     if(!res){
       alert('Razorpay SDK failed to load .Are you online?');
       return
     }
      const data=await fetch('/api/payment',{
        method:'POST',
        headers:new Headers({
          'Content-Type':'application/json'
      }),
      body:JSON.stringify({
        order_id:props.order_id
      })
      }).then(res=>res.json())
     const options = {
      "key": "rzp_test_YXsiwaRpNDe2mC", // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency":data.currency,
      "name": "Amazona",
      "description": "Total Price",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApx97ZEDXehw4YhdKTH3WWOFJnpvdMDdYcoC1Kx3EqgLXgnnlMEjqs5VybYsMN_qMWBQ&usqp=CAU",
      "order_id": data._id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler":async function (response){
          if(response.razorpay_payment_id){
            await fetch('/api/payment/success',{
              method:'PUT',
              headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:JSON.stringify({
               order_id:props.order_id,
               payment_Id:response.razorpay_payment_id
            })
            }).then(res=>res.json()).then(order=>{
              props.orderSummaryFun(order._id);
              props.paymentHandler();
            });
          }else{
            alert('Payment  failed');
          }
          
      },
      "prefill": {
          "name":data.name,
          "email":data.email
      }
     };
     const paymentObj=new window.Razorpay(options);
           paymentObj.open();
  }
  return (
    <div>
       <button className='block' style={{backgroundColor:'gold'}} onClick={loadingRazorpay}>Click to pay</button>
    </div>
  );
}

export default connect(null,{orderSummaryFun}) (Payment);