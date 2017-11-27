import React, { Component } from 'react';
import NavBar from '../nav-bar/index';
import ProjectionCharts from './projection-charts/index'
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


