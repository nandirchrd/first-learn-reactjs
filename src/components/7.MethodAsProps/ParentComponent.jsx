import React, { Component } from "react";
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.parentMethod = this.parentMethod.bind(this);
    }

    parentMethod(value){
        console.log(this);
        alert(`This is Parent, hello ${value}`);
    }
    render(){
        return (
            <div>
                <ChildComponent handlerMethod={this.parentMethod} nama="Nandi"></ChildComponent>
                <ChildComponent handlerMethod={this.parentMethod} nama="Gyda"></ChildComponent>
                <ChildComponent handlerMethod={this.parentMethod} nama="Ragnar"></ChildComponent>
            </div>
        )
    }
}