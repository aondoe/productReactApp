import React from 'react';
import './store.css';
import Loading from "./Loading";
import ProductFormat from "./ProductFormat";
import productLine from "./Product_List";

document.title="Super Store";

class ProductModel extends React.Component{
    
        constructor(){
            super();
            this.state={
                products:productLine,
                quantity:0
            }
        }
        componentDidMount(){
            setTimeout(()=>{this.setState({loaded:true})},1800)
        }
        
    render(){
    
        let welcome="Welcome to our greatest Store";
        let shopping="My Shopping list";
        let productComponent=productLine//.filter(products=>products.price<14)  //Filter out the records by price
                        .sort((a, b) => a.price > b.price ? - 1 : Number(a.price > b.price)) //Sort the records by price
                        .map(products => <ProductFormat key={products.id}
                                id={products.id}
                                product_name={products.product_name}
                                price={products.price}
                                description={products.description}
                                quantity={products.quantity}
                                addQuan={this.addQuan}
                                />)

        

    return(
        <div>
            <Loading loaded={this.state.loaded} />    
            <div class="row">
                <div class="col-lg-7">
                    <h1 class="text-center">{welcome}</h1>
                        {productComponent}
                    </div>
                        <div class="col-lg-5">
                            <h1 class="text-center">{shopping}</h1>
                        </div>
            </div>
        </div>)
    }
}
export default ProductModel;