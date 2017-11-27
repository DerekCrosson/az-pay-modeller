import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nav-bar.css';

const links = [
  { name: 'Overview of changes', to: '/', icon: 'fa fa-image' },
  { name: 'Your pay structures', to: '/pay-structures', icon: 'fa fa-pie-chart' },
  { name: 'Projection and modelling', to: '/projection', icon: 'fa fa-line-chart' },
];

function Item(props) {
  return (
    <li>
      <NavLink to={props.item.to} exact activeClassName="active">
        <span className="icon"><i className={props.item.icon}> </i></span>
        <span>{props.item.name}</span>
      </NavLink>
    </li>
  );
}

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="tabs is-toggle is-fullwidth is-large">
        <ul>{links.map(link => <Item key={link.name.toString()} item={link} />)}</ul>
      </div>
    </div>
  );
}
