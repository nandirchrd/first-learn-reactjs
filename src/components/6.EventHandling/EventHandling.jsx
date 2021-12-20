import React, { useEffect, useState } from "react";

const EventHandling = (props) => {
    const [input, setInput] = useState('');
    const state = useState("world");
    let world = state[0];
    let setWorld = state[1];

    useEffect(()=>{
        console.log(input);
    })

    const inputHandler = (e) => {
        let data = e.target.value;
        setInput((prev)=>{
            return data;
        });
        
    }
    return (
        <div>
            <h1>{world}</h1>
            <input type="text" onChange={inputHandler} onKeyDown={(e)=>{
                (e.key === 'Enter' && setWorld(input))
            }}/>
            <button onClick={()=>setWorld(input)}>Click</button>
        </div>
    )
}

export default EventHandling;