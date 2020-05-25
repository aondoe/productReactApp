import React from 'react';
import './store.css'


class Loading extends React.Component{
    constructor(){
        super();
        
        this.state={
            loaded:true
        }       
    }


    render(){
        return(
        <div>
            <h1>Just a moment, please....</h1>

        </div>)
    }

}
export default Loading;