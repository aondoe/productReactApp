import React from 'react';
import './store.css'


function Loading(props){
    return(

            props.loaded===false?<h1>Just a moment.....</h1>:"")
    }
export default Loading;