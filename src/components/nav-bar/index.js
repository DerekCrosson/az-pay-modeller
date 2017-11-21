import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';
import Auth from '../auth/auth';
const auth = new Auth();

export default class NavBar extends Component {

    logout = () => auth.logout();

    render() {
        return (
            <div className="nav-bar">
                <a className="button is-info logout" onClick={() => this.logout()}>
                    <span>Log Out</span>
                </a>
                <div className="clear"> </div>
                <div className="tabs is-toggle is-fullwidth is-large">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active">
                                <span className="icon"><i className="fa fa-image"></i></span>
                                <span>Overview of changes</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pay-structures" activeClassName="active">
                                <span className="icon"><i className="fa fa-bar-chart"></i></span>
                                <span>Your pay structures</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projection" activeClassName="active">
                                <span className="icon"><i className="fa fa-line-chart"></i></span>
                                <span>Projection and modelling</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
