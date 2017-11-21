import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends Component {

    // getFormData() {
    //     return {
    //         email: ReactDOM.findDOMNode(this.refs.email).value,
    //         password: ReactDOM.findDOMNode(this.refs.password).value
    //     };
    // }
    //
    // login(event) {
    //     event.preventDefault();
    //     const user = this.getFormData();
    //     this.props.auth.login(user.email, user.password);
    // }
    //
    // signup(){
    //     const user = this.getFormData();
    //     this.props.signup(user.email, user.password);
    // }
    //
    // loginWithGoogle() {
    //     this.props.auth.loginWithGoogle();
    // }

    login = () => this.props.auth.login();

    render() {
        // return (
        //     <div className="container">
        //         <div>
        //             <h2>Login</h2>
        //             <form>
        //                 <div>
        //                     <label>Email</label>
        //                     <input
        //                         type="email"
        //                         ref="email"
        //                         placeholder="you@example.com"
        //                     />
        //                 </div>
        //                 <div>
        //                     <label>Password</label>
        //                     <input
        //                         type="password"
        //                         ref="password"
        //                         placeholder="Enter your password"
        //                     />
        //                 </div>
        //                 <div>
        //                     <button
        //                         type="submit"
        //                         onClick={this.login.bind(this)}
        //                     >
        //                         Log In
        //                     </button>
        //                     <button onClick={this.signup.bind(this)}>
        //                         Sign Up
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //         <div>
        //             <h2>Social Authentication</h2>
        //             <button onClick={this.loginWithGoogle.bind(this)}>
        //                 Log In with Google
        //             </button>
        //         </div>
        //     </div>
        // )
        return (
            <div className="has-text-centered">
                <a className="button is-info" style={{cursor: 'pointer', marginTop: '30px'}} onClick={this.login.bind(this)}>Log In</a>
            </div>
        )
    }
}