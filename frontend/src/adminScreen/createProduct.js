import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MessageBox from '../components/messageBox';
import {resetState} from '../adminStore/actions/createProduct';
import CreateNewProduct from '../adminStore/actions/createProduct';
const CreateProduct=(props)=>{
const [name,setname]=useState('');
const [category,setcategory]=useState('');
const [image,setimage]=useState('');
const [price,setprice]=useState('');
const [brand,setbrand]=useState('');
const [rating,setrating]=useState('');
const [numReviews,setnumReviews]=useState('');
const [countInStock,setcountInStock]=useState('');
const [description,setdescription]=useState('');
const {loading,errMsg,product}=useSelector(state=>state.createProduct);
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(resetState());
},[dispatch])
const handleSubmit=e=>{
    e.preventDefault();
     const data={name,category,image,price,brand,rating,numReviews,countInStock,description}
     dispatch(CreateNewProduct(data));
     setname('');
     setcategory('');
     setprice('');
     setimage('');
     setbrand('');
     setrating('');
     setnumReviews('');
     setcountInStock('');
     setdescription('');
};

return(
    <div>
       <div>
           <h2 style={{textAlign:"center"}}>Create Product</h2>
           {
             errMsg?
             <MessageBox msg={errMsg.errMsg} msgType="danger"/>
             :product?
             <MessageBox msg="Product is successfully created" />
             :null
           }
           <form className="createProduct" onSubmit={handleSubmit}>
               <div>
                   <input
                     type='text'
                     required
                     placeholder="Name of product"
                     value={name}
                     onChange={e=>setname(e.target.value)}
                   />
               </div>

               <div>
                   <input
                     type='text'
                     required
                     placeholder="Category"
                     value={category}
                     onChange={e=>setcategory(e.target.value)}
                   />
               </div>

               <div>
                   <input
                     type='text'
                     required
                     placeholder="Product image"
                     value={image}
                     onChange={e=>setimage(e.target.value)}
                   />
               </div>
               <div>
                   <input
                     type='number'
                     required
                     placeholder="Price"
                     value={price}
                     onChange={e=>setprice(e.target.value)}
                   />
               </div>
               <div>
                   <input
                     type='text'
                     required
                     placeholder="Brand of product"
                     value={brand}
                     onChange={e=>setbrand(e.target.value)}
                   />
               </div>
               <div>
                   <input
                     type='number'
                     required
                     placeholder="Rating"
                     value={rating}
                     onChange={e=>setrating(e.target.value)}
                   />
               </div>

               <div>
                   <input
                     type='number'
                     required
                     placeholder="Number of reviews"
                     value={numReviews}
                     onChange={e=>setnumReviews(e.target.value)}
                   />
               </div>

               <div>
                   <input
                     type='number'
                     required
                     placeholder="Count In Stock"
                     value={countInStock}
                     onChange={e=>setcountInStock(e.target.value)}
                   />
               </div>

               <div>
                   <input
                     type='text'
                     required
                     placeholder="Description about product"
                     value={description}
                     onChange={e=>setdescription(e.target.value)}
                   />
               </div>
               <div>
                    <button type='submit'>Create New Product</button>
               </div>
            
           </form>
       </div>
    </div>
   )
}

export default CreateProduct;