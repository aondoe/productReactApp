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
            loaded: false,
            quantity:0
        }
    }

    componentDidMount(props){
        setTimeout(
            this.setState({
                loaded:true
            }),
        13800)
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
                                quantity={this.state.quantity}
                                addQuan={this.addQuan}
                                />)
        let someSum=0;
        let shopList=productLine
        .map(products => <ProductFormat key={products.id}
            id={products.id}
            product_name={products.product_name}
            price={products.price}
            description={products.description}
            quantity={this.state.quantity}
            />)
        .filter(prod=>prod.quantity>0)
            
    return(
        <div>
            <Loading loaded={this.state.loaded} />

            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center">{welcome}</h1>
                        {productComponent}
                    </div>

            </div>
                 {shopList}
        </div>)
    }
}
export default ProductModel;