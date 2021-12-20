import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.development';

// useState & this.state

//  Using Class Component
class State extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    decrement(){
        this.setState( {
            count: this.state.count - 1
        },
        () => { 
            console.log(this.state.count);
        } 
        )
    }

    increment(){
        this.setState( (prevState, props) => {
            return { count: prevState.count + 1 }
        }, () => {
            console.log(this.state.count);
        }
        )
        
    }

    incfive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
            <Fragment>
                <h4>State</h4>
                <button onClick={() => this.decrement()}>-</button> { this.state.count } <button onClick={() => this.incfive()}>+</button>
            </Fragment>
        )
    }
}

export default State;