import { Component } from "react";
import App from "./App";
import './Hello.css';

const Hello = (props) =>{
    
        return(
            <div className="f4 tc">
                <h1>Hello World</h1>
                <p>{props.greeting}</p>
                <p>This is the correct way to do things Count: {props.numberone}</p>
            </div>
            
            

        );
    
}

export default Hello;