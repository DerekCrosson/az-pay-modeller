import React, { Component } from 'react';

export default class Login extends Component {

    login = () => this.props.auth.login();

    render() {
        return (
            <div className="has-text-centered">
                <a className="button is-info" style={{cursor: 'pointer', marginTop: '30px'}} onClick={this.login.bind(this)}>Log In</a>
            </div>
        )
    }
}