import React from 'react';
import './styles/loadingBox.css';

const LoadingBox=()=>(
        <div class="myLoader">
          <div class="loader" id="loader-2">
            <span></span>
            <span></span>
            <span></span>
           </div>
           <p> Loading ...</p>
        </div>
);

export default LoadingBox;