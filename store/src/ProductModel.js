import React from 'react';
import './store.css';
import ProductFormat from "./ProductFormat";
import productLine from "./Product_List"

document.title="Super Store";

class ProductModel extends React.Component{
    
    render(){
        let welcome="Welcome to our greatest Store";
        let productComponent=productLine//.filter(products=>products.price<14)  //Filter out the records by price
                        .sort((a, b) => a.price > b.price ? - 1 : Number(a.price > b.price)) //Sort the records by price
                        .map(products => <ProductFormat key={products.id}
                                id={products.id}
                                product_name={products.product_name}
                                price={products.price}
                                description={products.description}
                                />)
    return(
        <div>
            <h1 class="text-center">{welcome}</h1>
                    {productComponent}
        </div>)
    }
}
export default ProductModel;