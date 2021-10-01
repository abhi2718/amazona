import React ,{Component} from 'react';
import CheckOutStep from '../components/checkOutStep';
import {connect} from 'react-redux';
import {saveShippingAddress} from '../store/shippingActionCreator';

class ShippingAddress extends Component{
    constructor(props){
        super(props);
        this.address=this.props.shippingAddress.shippingAddress;
        if(this.address){
            this.state={
                fullName:this.address.fullName,
                address:this.address.address,
                city:this.address.city,
                postalCode:this.address.postalCode,
                country:this.address.country
            }
        }else{
            this.state={
                fullName:'',
                address:'',
                city:'',
                postalCode:'',
                country:''
            }
        }
        this.submitHandler=this.submitHandler.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.checkValidation=this.checkValidation.bind(this);
        if(!this.props.userInfo){
            const redirect=this.props.location.search?this.props.location.search.split('=')[1]:null;
            if(redirect==null){
                this.props.history.push('/signin')
            }
        }else{
            if(this.props.cartItem.length===0){
               this.props.history.push('/cart');
            }
        }
    }

    submitHandler(e){
        e.preventDefault();
        this.props.saveShippingAddress(this.state);
        this.checkValidation()
    }
    checkValidation(){
        if(this.props.userInfo){
            this.props.history.push('/placeorder');
        }
    }
    handleChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    render(){
        let {fullName,address,city,postalCode,country}=this.state;
        return(
            <div>
              <CheckOutStep step1={true} step2={true} />
              <div className='shippingAddress' style={{display:'flex',justifyContent:'center',margin:'10px 0'}} >
              <form style={{
                     backgroundColor:"white",
                     padding:"15px",
                     borderRadius:"10px"
                 }}  onSubmit={this.submitHandler}> 
                  <div>
                   <h2 style={{textAlign:'center'}}>Shipping Address</h2>
                  </div>
                <div>
                    <label style={{fontSize:"14px"}} htmlFor='fullName'>Full Name</label>
                    <input 
                     type='text' 
                     id='fullName'
                     value={fullName}
                     name='fullName'
                     placeholder='Full Name'
                     onChange={this.handleChange}
                     required
                     style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                     />
                </div>
                <div>
                    <label style={{fontSize:"14px"}}  htmlFor='address'>Address</label>
                    <input 
                     type='text' 
                     id='address'
                     value={address}
                     name='address'
                     placeholder='Address'
                     onChange={this.handleChange}
                     required
                     style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                     />
                </div>
                <div>
                    <label style={{fontSize:"14px"}}  htmlFor='city'>City</label>
                    <input 
                     type='text' 
                     id='city'
                     value={city}
                     name='city'
                     placeholder='City'
                     onChange={this.handleChange}
                     required
                     style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                     />
                </div>
                <div>
                    <label style={{fontSize:"14px"}} htmlFor='postalCode'>Postal Code</label>
                    <input 
                     type='po' 
                     id='postalCode'
                     value={postalCode}
                     name='postalCode'
                     placeholder='Postal Code'
                     onChange={this.handleChange}
                     required
                     style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                     />
                </div>

                <div>
                    <label style={{fontSize:"14px"}} htmlFor='country'>Country</label>
                    <input 
                     type='text' 
                     id='country'
                     value={country}
                     name='country'
                     placeholder='Country'
                     onChange={this.handleChange}
                     required
                     style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                     />
                </div>
                <div>
                  <button style={{backgroundColor:'gold'}} type='submit'>continue</button>
                </div>
              </form>
            </div>
        </div>
        )
    }
}
const mapStateToProps=(state)=>({
    shippingAddress:state.shippingAddress,
    userInfo:state.signIn.userInfo,
    cartItem:state.cart.cartItem
})
export default connect(mapStateToProps,{saveShippingAddress}) (ShippingAddress);