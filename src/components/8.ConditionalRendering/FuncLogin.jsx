import React, { useState } from "react";

const Login = (props) => {
    const [isLogin, setLogin] = useState(true);

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

    return isLogin && ( <div> <h1>Hello User</h1> </div> );
}

export default Login;