import React, { Component } from 'react';

// export default function Destructuring (props) {
//     const {name, age, gender, children} = props;
//     return (
//         <div>
//             <h4>Props</h4>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Gender: {gender}</p>
//             {children}
//         </div>
//     )
// }

export default class Destructuring extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            speed: 0
        }
    }

    render(){
        const {name, age, gender, children} = this.props;
        const {count, speed} = this.state;
        return(
            <div>
                <h4>State</h4>
                <p>{count}</p>
                <p>{speed}</p>
                <h4>Props</h4>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                {children}    
            </div>
        )
    }
}