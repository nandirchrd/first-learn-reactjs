import React, { Component } from "react";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: true
        }
    }

    render(){
        // if(this.state.isLogin){
        //     return (
        //         <div>
        //             <h1>Hello User</h1>
        //         </div>
        //     )
        // } else{
        //     return (
        //         <div>
        //             <h1>Hello Guest</h1>
        //         </div>
        //     )
        // }

        // return this.state.isLogin ?
        // ( <div> <h1>Hello User</h1> </div>) :
        // ( <div> <h1>Hello Guest</h1> </div>)

        return this.state.isLogin && ( <div> <h1>Hello User</h1> </div> );
    }
}