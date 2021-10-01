import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Rating from '../components/rating';
import './productPage.css';
import {getProduct} from '../store/actionCreator';

class ProductPage extends Component{
    constructor(props){
        super(props)
        this.state={
            qty:1
        }
        this.handleQtyChange=this.handleQtyChange.bind(this);
        this.handleCart=this.handleCart.bind(this);
        this.id=this.props.match.params.id;
        this.props.getProduct(this.id);
    }
    
    handleQtyChange(e){
        this.setState({qty:e.target.value})
    }
    handleCart(){
        this.props.history.push(`/cart/${this.props.product._id}?qty=${this.state.qty}`);
    }
    render(){
        const product=this.props.product;
        const {qty}=this.state;
        if(!product){
            return (<div>Product Does Not Found</div>)
        }else{
        return(
            <main>
                <Link to='/'>Back to result</Link>
                 <div className='row top'>
                     <div className='col-2'>
                         <img  src={product.image} alt={product.name}/>
                     </div>
                     <div className='col-1'>
                         <ul style={{marginBottom:"30px",paddingLeft:"10px"}}>
                             <li><h2>{product.name}</h2></li>
                             <li style={{marginTop:"-20px"}}>
                                 <Rating rating={product.rating} numReviews={product.numReviews} />
                             </li>
                             <li>
                                 &#8377; {product.price}
                             </li>
                             <li>
                                 <strong> Description :-</strong>
                                
                                 <span style={{padding:"10px"}}> {product.description}.</span>    
                             </li>
                         </ul>
                     </div>
                     <div className='col-1'>
                         <div style={{marginBottom:"30px"}}  className='card card-body'>
                             <ul>
                                 <li>
                                     <div className='row'>
                                         <div>Price :- </div>
                                         <div>&#8377;{product.price}</div>
                                     </div>
                                 </li>
                                 <li>
                                     <div className='row'>
                                         <div>Status :- </div>
                                         <div>
                                             {product.countInStock>0?<span className='success'>In Stock</span>:<span className='error'>Unavailable</span>}
                                        </div>
                                     </div>
                                 </li>
                                 {
                                     product.countInStock>0?
                                       <div>
                                           <li>
                                               <div className='row'>
                                                   <div>Qty :-</div>
                                                   <div>
                                                       <select value={qty} onChange={this.handleQtyChange}>
                                                       {
                                                           [...Array(product.countInStock).keys()].map(x=>(
                                                                 <option value={x+1} key={x+1} >{x+1}</option>
                                                           ))
                                                       }
                                                       </select>
                                                   </div>
                                               </div>
                                           </li>
                                           <li>
                                            <button onClick={this.handleCart} className='primary block'>Add to Cart</button>
                                          </li>
                                       </div>
                                       :null
                                 }
                             </ul>
                         </div>
                     </div>
                 </div>
           </main>
        )
     }
    }
}
const mapStateToProps=(state)=>({
    product:state.sp.product
})

export default connect(mapStateToProps,{getProduct})(ProductPage);