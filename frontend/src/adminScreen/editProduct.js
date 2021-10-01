import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import MessageBox from '../components/messageBox';
import {getProduct} from '../adminStore/actions/getProduct';
import editProduct from '../adminStore/actions/editProduct';
const EditProduct=(props)=>{
    const [name,setname]=useState('');
    const [category,setcategory]=useState('');
    const [image,setimage]=useState('');
    const [price,setprice]=useState('');
    const [brand,setbrand]=useState('');
    const [rating,setrating]=useState('');
    const [numReviews,setnumReviews]=useState('');
    const [countInStock,setcountInStock]=useState('');
    const [description,setdescription]=useState('');
    const {loading,errmsg,product}=useSelector(state=>state.getProduct);
    const {loading_edit,errMsg_edit,editedproduct}=useSelector(state=>state.editProduct);
    const dispatch=useDispatch();
    
      
    useEffect(()=>{
            if(product ){
              setname(product.name);
              setcategory(product.category);
              setprice(product.price);
              setimage(product.image);
              setbrand(product.brand);
              setrating(product.rating);
              setnumReviews(product.numReviews);
              setcountInStock(product.countInStock);
              setdescription(product.description);
          }else{
               dispatch(getProduct(props.match.params.id));
            }
            if(editedproduct){
               setname(editedproduct.name);
               setcategory(editedproduct.category);
               setprice(editedproduct.price);
               setimage(editedproduct.image);
               setbrand(editedproduct.brand);
               setrating(editedproduct.rating);
               setnumReviews(editedproduct.numReviews);
               setcountInStock(editedproduct.countInStock);
               setdescription(editedproduct.description);
            }
        
    },[dispatch,product,editedproduct])
    const handleSubmit=e=>{
        e.preventDefault();
         const data={name,category,image,price,brand,rating,numReviews,countInStock,description,}
         dispatch(editProduct(data,product._id));
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
      <div style={{margin:'20px'}}>
       <h2 style={{textAlign:"center"}}>Edit Product</h2>
      <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
               <label>Name</label>
                <input 
                 type="text"
                 value={name}
                 required
                 onChange={e=>setname(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
           </div>
            <div style={{display:"flex",justifyContent:"center"}}>
               <label>Category</label>
                <input 
                 type="text"
                 value={category}
                 required
                 onChange={e=>setcategory(e.target.value)}
                  style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>
           <div style={{justifyContent:"center"}}>
               <label>Price</label>
                <input 
                 type="text"
                 value={price}
                 required
                 onChange={e=>setprice(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Image</label>
                <input 
                 type="text"
                 value={image}
                 required
                 onChange={e=>setimage(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Brand</label>
                <input 
                 type="text"
                 value={brand}
                 required
                 onChange={e=>setbrand(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>

           <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Rating</label>
                <input 
                 type="text"
                 value={rating}
                 required
                 onChange={e=>setrating(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>

           <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Number of Reviews</label>
                <input 
                 type="text"
                 value={numReviews}
                 required
                 onChange={e=>setnumReviews(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Count In Stock</label>
                <input 
                 type="text"
                 value={countInStock}
                 required
                 onChange={e=>setcountInStock(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              
           </div>
            <div style={{display:"flex",justifyContent:"center"}}>
             
               <label>Description</label>
                <input 
                 type="text"
                 value={description}
                 required
                 onChange={e=>setdescription(e.target.value)}
                 style={{width:"300px",borderRadius:"20px",border:"1px solid gold"}}
                />
              <button style={{backgroundColor:"gold"}} type="submit">Upload</button>
           </div>
          </form>
          </div>
       )
}

export default EditProduct;