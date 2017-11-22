import React, { Component } from 'react';
import NavBar from '../nav-bar';
import ProjectionCharts from './projection-charts'
import './projection-chart.css';

export default class Projection extends Component {

    render() {
        return (
            <div className="container">
                <NavBar />
                <ProjectionCharts />
            </div>
        );
    }
}


