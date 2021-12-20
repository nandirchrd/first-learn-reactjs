import React, { Component } from 'react';

//  Using Functional Component
function Props (props) {
    console.log(props);
    return (
        <div>
            <h4>Props</h4>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            {props.children}
        </div>
    )
}

// Using Class Component
// export default class Props extends Component {
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//                 <h1> Function Props </h1>
//                 <h4>Name: {this.props.name}</h4>
//                 <h4>Age: {this.props.age}</h4>
//                 <h4>Gender: {this.props.gender}</h4>
//                 {this.props.children}
//             </div>
//         )
//     }
    
// }

export default Props;

