import React, { Component } from 'react';
import NavBar from '../nav-bar';
import ReactHighcharts from 'react-highcharts';
import './projection-chart.css';

const config = {
    title: {
        text: 'Total pay package'
    },
    yAxis: {
        title: {
            text: 'Income'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Projected',
        data: [43934, 52503, 57177, 69658, 97031]
    }, {
        name: 'Current',
        data: [24916, 24064, 29742, 29851, 32490]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
};

export default class Projection extends Component {

    render() {
        return (
            <div className="container">
                <NavBar />
                <div className="columns">
                    <div className="column is-three-quarters">
                        <ReactHighcharts config={config} domProps={{id: 'projectedPay'}}></ReactHighcharts>
                    </div>
                    <div className="column button-panel">
                        <a className="button is-medium">Total pay package</a>
                        <a className="button is-medium">Salary and benefit</a>
                        <a className="button is-medium">Bonus</a>
                        <a className="button is-medium">LTI and AMC</a>
                    </div>
                </div>
            </div>
        );
    }
}


