import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

const totalPayChart = {
    title: 'Total pay package',
    yAxis: 'income',
    data:  [{
        name: 'Projected',
        data: [43934, 52503, 57177, 69658, 97031]
    }, {
        name: 'Current',
        data: [24916, 24064, 29742, 29851, 32490]
    }]
};

const salaryAndBenefits = {
    title: 'Salary and benefits',
    yAxis: 'income',
    data:  [{
        name: 'Projected',
        data: [43934, 65566, 45646, 45646, 97031]
    }, {
        name: 'Current',
        data: [23424, 24064, 6546, 26132, 45454]
    }]
};

export default class ProjectionCharts extends Component {

    constructor(){
        super();
        this.state = {
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
        }
    }

    updateChart(chart){
        this.setState({
            title: { text: chart.title },
            yAxis: { title: { text: chart.yAxis } },
            series: chart.data
        });
    }

    render(){
        return (
            <div className="columns">
                <div className="column is-three-quarters">
                    <ReactHighcharts config={this.state} domProps={{id: 'projectedPay'}}></ReactHighcharts>
                </div>
                <div className="column button-panel">
                    <a className="button is-medium" onClick={() => this.updateChart(totalPayChart)}>Total pay package</a>
                    <a className="button is-medium" onClick={() => this.updateChart(salaryAndBenefits)}>Salary and benefit</a>
                    <a className="button is-medium">Bonus</a>
                    <a className="button is-medium">LTI and AMC</a>
                </div>
            </div>
        )
    }
}