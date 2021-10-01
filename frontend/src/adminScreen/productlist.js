import React,{useEffect} from 'react';
import LoadingBox from '../components/loadingBox';
import {useSelector,useDispatch} from 'react-redux';
import {resetState,deleteProduct} from '../adminStore/actions/createProduct';
import {getProducts} from '../store/actionCreator';
import {Link} from 'react-router-dom';


const ProductList=function(props){
    const dispatch=useDispatch();
    const {loading,errMsg,products}=useSelector(state=>state.pr);
     useEffect(()=>{
       dispatch(getProducts());
     },[dispatch])
     const deletHandler=id=>{
         dispatch(deleteProduct(id));
         dispatch(getProducts());
     }
    return (
        <div>
           {
               loading?<LoadingBox />:
               errMsg?<p></p>
               :<div>
                   <h2 style={{textAlign:"center"}}>Product List</h2>
                   <div className='row' style={{padding:'10px'}}>
                     <h4>Create Product</h4>
                     <Link to="/admin/createProduct">
                       <button >
                         Create
                       </button>
                     </Link>
                   </div>
                   <div className='tablelg'>
                   <table className='table'>
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>Name</th>
                               <th>Price</th>
                               <th>Category</th>
                               <th>Brand</th>
                               <th>Acctions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               products.map((product)=>(
                                   <tr key={product._id}>
                                       <td>{product._id}</td>
                                       <td>{product.name}</td>
                                       <td>&#8377;{product.price}</td>
                                       <td>{product.category}</td>
                                       <td>{product.brand}</td>
                                       <td>
                                           <button
                                             type='button'
                                             onClick={()=>
                                                props.history.push(`/admin/${product._id}/edit`)
                                            }
                                           >
                                               Edit
                                           </button>
                                           <button  style={{marginLeft:'10px'}}
                                             type='button'
                                             onClick={()=>deletHandler(product._id)}
                                           >
                                               Delete
                                           </button>
                                       </td>
                                   </tr>
                               ))
                           }
                       </tbody>
                   </table>
               </div>
               <div  className='tableSmall'>
               <table className='table'>
                      
                       <tbody style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                           {
                               products.map((product)=>(
                                   <tr key={product._id} style={{margin:'10px',width:'280px'}}>
                                       <td><strong>ID</strong> :-  {product._id}</td>
                                       <td><strong>Name</strong> :- {product.name}</td>
                                       <td><strong>Price</strong> :- &#8377;{product.price}</td>
                                       <td><strong>Category</strong> :- {product.category}</td>
                                       <td><strong>Brand</strong> :-  {product.brand}</td>
                                       <td>
                                           <button
                                             type='button'
                                             onClick={()=>
                                                props.history.push(`/admin/${product._id}/edit`)
                                            }
                                           >
                                               Edit
                                           </button>
                                           <button  style={{marginLeft:'10px'}}
                                             type='button'
                                             onClick={()=>deletHandler(product)}
                                           >
                                               Delete
                                           </button>
                                       </td>
                                   </tr>
                               ))
                           }
                       </tbody>
                   </table>
               </div>
               </div>
           }
        </div>
      );
}

export {ProductList};
