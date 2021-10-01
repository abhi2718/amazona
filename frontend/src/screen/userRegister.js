import React,{Component} from 'react';
import './register.css';
import './signin.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../store/registerActionCreation';
import {signIn} from '../store/signActionCreator';
class UserRegister extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleCahnge=this.handleCahnge.bind(this);
    }
    handleCahnge(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   async handleSubmit(e){
        e.preventDefault();
        let {name,email,password,confirmPassword}=this.state;
        if(password===confirmPassword){
          await this.props.register(name,email,password);
          await this.props.signIn(email,password);
        }else{
            alert('ConfirmPassword and Password does not match ');
        } 
    }
    render(){
        const {name,email,password,confirmPassword}=this.state;
        let {errMsg}=this.props;
        let redirect=this.props.location.search?
        this.props.location.search.split('=')[1]:'/';
      
        if(this.props.userInfo){
            if(redirect==='root'){
                this.props.history.push('/');
            }else{
                this.props.history.push(`/${redirect}?redirect=placeOrder`);
            }
            this.setState({email:'',password:''});
        }
        return(
            <div>
                 <div className='formContainer'>
               <form  style={{
                     backgroundColor:"white",
                     padding:"15px",
                     borderRadius:"10px",
                     margin:"30px 0"
                 }} className='form' onSubmit={this.handleSubmit}>
                      <h2 style={{textAlign:"center"}}>Create Account</h2>
               <div>
                    <div>
                         {
                            errMsg?<p className='errMsg'>{errMsg.msg}</p>:null
                         }
                     </div>
                     <label style={{fontSize:"14px"}} htmlFor='name'>Name</label>
                     <input 
                      type='text'
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                      onChange={this.handleCahnge}
                      id='name' 
                      name='name' 
                      required
                      value={name} 
                      placeholder='Name' 
                      />
                 </div>
                 <div>
                     <label style={{fontSize:"14px"}}  htmlFor='email'>Email</label>
                     <input 
                      type='email'
                      onChange={this.handleCahnge}
                      id='email' 
                      name='email' 
                      required
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                      value={email} 
                      placeholder='Email' 
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
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue",
                        width:"300px"
                    }} 
                      placeholder='Password'
                      onChange={this.handleCahnge}
                       />
                 </div>
                 <div>
                     <label style={{fontSize:"14px"}}  htmlFor='confirmPassword'>Confirm Password</label>
                     <input 
                      type='password' 
                      id='confirmPassword'
                      name='confirmPassword' 
                      value={confirmPassword}
                      required
                      style={{
                        borderRadius:"20px",
                        paddingLeft:"20px",
                        border:"1px solid blue ",
                        width:"300px"
                    }}  
                      placeholder='Confirm Password'
                      onChange={this.handleCahnge}
                       />
                       <button type='submit' className='primary'>Register</button>
                 </div>
                 <p style={{fontSize:"14px"}}>existing user ?
                   <Link to={redirect==='shipping'?'/signIn?redirect=shipping':'/signIn'}> Sign In</Link>
                 </p>
               </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    userInfo:state.register.userInfo,
    errMsg:state.register.errMsg
})
export default connect(mapStateToProps,{signIn,register}) (UserRegister );
