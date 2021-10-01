import React,{Component} from 'react';
import Product from './product';
import LoadingBox from './loadingBox';
import {connect} from 'react-redux';
import {getProducts} from '../store/actionCreator';
class ProductList extends Component{
    constructor(props){
        super(props);
        this.state={
            stopLoading:false,
            err:false
        }
        setTimeout(()=>{
            this.props.getProducts();
            this.setState({stopLoading:true})
        },200)
    }
    componentDidMount(){
        fetch('/api/addproduct');
    }
    render(){
        const products=this.props.products.map(p=>(
            <Product {...p} key={p._id} />
        ));
        return(
                 <main>
                     {
                       !this.state.stopLoading?<LoadingBox />:
                       <div>
                            <h2 style={{textAlign:"center"}}> Our Products</h2>
                            <div className="row center">{products}</div>
                       </div>
                     }
                 </main>
        )
    }
     
}
const mapStateToProps=(state)=>({
    products:state.pr.products
})
export default connect(mapStateToProps,{getProducts}) (ProductList);