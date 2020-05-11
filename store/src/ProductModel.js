import React from 'react';
import productLine from "./Product_List";   //This is the raw data from an array of object literals
import ProductFormat from "./ProductFormat"
import './store.css';

let hello="Welcome to our store";
document.title="Super Store";

let productComponent=productLine//.filter(products=>products.price<14)  //Filter out the records by price
                .sort((a, b) => a.price > b.price ? - 1 : Number(a.price > b.price))  //Sort the records by price
                .map(products => <ProductFormat key={products.id}
                        id={products.id}
                        product_name={products.product_name}
                        price={products.price}
                        description={products.description}
                        />)

function ProductModel(){

return(
    <div>
        <h1 class="text-center">{hello}</h1>
                {productComponent}
    </div>)}

export default ProductModel;