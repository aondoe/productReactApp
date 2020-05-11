import React from 'react';
import './store.css';


function Product_Format(props){

return (
<div>

    <div class="row">
        <div class="col-lg-4">
            </div>
        <div class="col-lg-4">
            <h1>{props.product_name}</h1>
                <span>
                    {props.price}
                </span>
            <h2>Description</h2>
                {props.description}
            
            <h2>ID:</h2><span>
                {props.id}
            </span>
            

        </div>
        <div class="col-lg-4">
            </div>
    </div>

</div>)
}

export default Product_Format;