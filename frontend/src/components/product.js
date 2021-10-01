import React from 'react';
import './styles/product.css';
import {Link} from 'react-router-dom';
import Rating from './rating'
const Product=({name,category, image,price, brand,rating,numReviews,description,_id})=>(
<div className="card">
    <Link to={`/product/${_id}`}>
        <img className="product-img" src={image} alt="product" />
    </Link>
    <div className="card-body">
        <div className="row">
          <Link className='product-name' to={`/product/${_id}`}>{name}</Link>
          <Link className="brand-name" to="#">{brand}</Link>
        </div>
        <Rating rating={rating} numReviews={numReviews} />
        <a> &#8377; {price}</a>
    </div>
</div>
)
export default Product;