import React from "react";

const ChildComponent = (props) => {
    const {handlerMethod: handler, nama} = props
    return (
        <button onClick={()=>{handler(nama)}}>Click {nama}</button>
    )
}

export default ChildComponent;