import React from "react";
import './Main.css'
import GambarDua from "./img/functional.png"
import GambarSatu from "./img/class.png"
import HelloClass from './HelloClass';
import HelloFunc from './HelloFunc';


const Main = () => {
    return (
        <div className="first">
            <div className="title">#1 Print Hello World to Document</div>
            <HelloClass></HelloClass>
            <hr/>
            <HelloFunc></HelloFunc>
            <div className="source">./components/1.HelloWorld</div>
        </div>
    )
}

export default Main;