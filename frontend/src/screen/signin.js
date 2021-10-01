import React,{Component} from 'react';
import './signin.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { signIn} from '../store/signActionCreator';
class SignInUser extends Component{
    constructor(props){
        super(props) 
        this.state={
            email:'',
            password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleCahnge=this.handleCahnge.bind(this);
    }
      handleSubmit(e){
       e.preventDefault();
       let {email,password}=this.state;
       this.props.signIn(email,password);
   }
   handleCahnge(e){
       this.setState({
           [e.target.name]:e.target.value
       })
   }
    render(){
        let redirectAfterRegister=this.props.location.search?
        this.props.location.search.split('=')[1]:'root';
        let {email,password}=this.state;
        let msg=this.props.errMsg;
        let redirect=this.props.location.search?'/'+
        this.props.location.search.split('=')[1]:'/';
        if(this.props.userInfo){
            this.props.history.push(`${redirect}`);
            this.setState({email:'',password:''});
        }
        return(
            <div  className='formContainer'>
               <form style={{
                     backgroundColor:"white",
                     padding:"15px",
                     borderRadius:"10px", 
                 }} className='form' onSubmit={this.handleSubmit}>
                       <h2 style={{textAlign:"center"}}>Welcome !</h2>
                 <div>
                     <div>
                         {
                             msg?<p className='errMsg'>{msg.msg}</p>:null
                         }
                     </div>
                     <label style={{fontSize:"14px"}} htmlFor='email'>Email</label>
                     <input 
                      type='email'
                      onChange={this.handleCahnge}
                      id='email' 
                      name='email' 
                      required
                      value={email} 
                      placeholder='Email'
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                      />
                 </div>
                 <div>
                     <label style={{fontSize:"14px"}} htmlFor='password'>Password</label>
                     <input 
                      type='password' 
                      id='password'
                      name='password' 
                      value={password}
                      required
                      placeholder='Password'
                      onChange={this.handleCahnge}
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }}
                       />
                       <button type='submit' className='primary'>Sign In</button>
                 </div>
                 <p style={{paddingLeft:"15px",fontSize:"14px"}}>New customer ?<Link to={`/register?redirect=${redirectAfterRegister}`}> Sign up</Link></p>
               </form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>({
    userInfo:state.signIn.userInfo,
    errMsg:state.signIn.errMsg,
    isUserLogIn:state.signIn.isUserLogIn
})
export default connect(mapStateToProps,{signIn}) (SignInUser);