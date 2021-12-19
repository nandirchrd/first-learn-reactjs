import React from "react";
import './Main.css';
import UseJSX from './UseJSX';
import UseCreateElement from "./UseCreateElement";
import GambarSatu from './img/jsx.png';
import GambarDua from './img/createelement.png';

const Main = () => {
    return(
        <div className="third">
            <div className="title"> #3 JSX vs React.Create.Element() </div>
            <UseJSX></UseJSX>
            <UseCreateElement></UseCreateElement>
            <div className="function-vs-class">
                <div>
                    <h4>ClassComponent</h4>
                    <img src={GambarSatu} />
                </div>
                <div>
                    <h4>FunctionalComponent</h4>
                    <img src={GambarDua} />
                </div>
            </div>
            <div className="source">./components/3.JSXvsReact.Create.Element()</div>
        </div>
    )
}

export default Main;