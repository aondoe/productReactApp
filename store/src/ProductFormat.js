import React from 'react';
import './store.css';

/**      This is the form which will provide the structure for the page.    **/ 

function ProductFormat(props){

return (
<div>
    <div class="row">
        <div class="col-lg-1">
            </div>
            <div class="col-lg-7">
                <div class="productBox">
                    <h2>{props.product_name}</h2>
                                <strong>
                                    Price:
                                </strong>
                                    <span>
                                        {props.price}
                                    </span>
                                <p class="desc">
                            <strong>
                                Description:
                            </strong>
                        {props.description}
                    </p>
                </div>
            </div>
        <div class="col-lg-4">
            </div>
    </div>
</div>)}

export default ProductFormat;