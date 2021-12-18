import React from "react";
import './Main.css'
import GambarDua from "./img/functional.png"
import GambarSatu from "./img/class.png"


const Main = () => {
    return (
        <div className="second">
            <div className="title">#2 Functional Components vs Class Components</div>
            <div className="function-vs-class">
                <div>
                    <h4>ClassComponent</h4>
                    <img src={GambarSatu} />
                </div>
                <div>
                    <h4>FunctionalComponent</h4>
                    <img src={GambarSatu} />
                </div>
            </div>
            <div className="source">./components/2.FunctionalvsClass</div>
        </div>
    )
}

export default Main;