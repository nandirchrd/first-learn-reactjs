import React from 'react';
import './Main.css';
import Props from './Props';
import State from './State';

function Main () {
    return (
        <div className="fourth">
            <div className="title"> #4 PropsState </div>
            <Props name="Gyda" age="17 Years Old" gender="Female">This is Children props</Props>
            <hr/>
            <State></State>
            <div className="source">./components/4.PropsState</div>
        </div>
    )
}

export default Main;