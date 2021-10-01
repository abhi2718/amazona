import React from 'react';

const Rating=({rating,numReviews})=>(
    <div className='rating'>
        <span>
        <i className={
            rating>=1?"fa fa-star"
            :rating >=0.5?"fa fa-star-half-o"
            :"fa fa-star-o"
            } 
            aria-hidden="true"></i>
        </span>
        <span>
        <i className={
            rating>=2?"fa fa-star"
            :rating >=1.5?"fa fa-star-half-o"
            :"fa fa-star-o"
            } 
            aria-hidden="true"></i>
        </span>
        <span>
        <i className={
            rating>=3?"fa fa-star"
            :rating >=2.5?"fa fa-star-half-o"
            :"fa fa-star-o"
            } 
            aria-hidden="true"></i>
        </span>
        <span>
        <i className={
            rating>=4?"fa fa-star"
            :rating >=3.5?"fa fa-star-half-o"
            :"fa fa-star-o"
            } 
            aria-hidden="true"></i>
        </span>
        <span>
        <i className={
            rating>=5?"fa fa-star"
            :rating >=4.5?"fa fa-star-half-o"
            :"fa fa-star-o"
            } 
            aria-hidden="true"></i>
        </span>
        <span style={{fontSize:'1.2rem'}}>{" "+numReviews+' reviews'}</span>
    </div>
)
export default Rating;