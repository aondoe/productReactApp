import React from 'react';
import productLine from "./Product_List";
import './store.css';

/**      This is the form which will provide the structure for the page.    **/ 

class ProductFormat extends React.Component{
    constructor(){
        super();
        this.state={
            products:productLine,
            quantity:0
        }
        this.addQuan=this.addQuan.bind(this);   //Will increase the quantity for a product, which will multiply price to quantity
        this.decQuan=this.decQuan.bind(this);   //Will increase the quantity for a product, which will multiply price to quantity
    }

    addQuan(){
        this.setState((oldState)=>{
            return {quantity: oldState.quantity+1}
        })
    }
    decQuan(){
        this.setState((oldState)=>{
            return {quantity: oldState.quantity-1}
        })
    }

    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-lg-1">
                        </div>
                        <div class="col-lg-7">
                            <div class={this.state.quantity>0?"completeProductBox":"productBox"}>
                                <h2>{this.props.product_name}</h2>
                                    <p class="desc">
                                            <strong>
                                                Description:
                                            </strong>
                                            {this.props.description}
                                                </p>
                                            <strong>
                                                Price:
                                                    {this.props.price}
                                            </strong>
                                                <div>
                                                        <span class="many">How Many?</span>
                                                        <input class="calc" onClick={()=>this.decQuan()} value="-" type="button"/>
                                                            {this.state.quantity}   {/*How many products do you want*/}
                                                             <input class="calc" onClick={()=>this.addQuan()} value="+" type="button"/>
                                                        <span style={{display: this.state.quantity>0?"block":"none"}}>
                                                            <strong>Total Price: $</strong> 
                                                            {((this.state.quantity*this.props.price)*(0.06*this.props.price)).toFixed(2)}
                                                        </span>   {/* Will show up if quantity is greater than 0*/}
                                                </div>
                                    </div>
                                </div>
                        <div class="col-lg-4">
                            </div>
                    </div>
            </div>)
    }
}

export default ProductFormat;