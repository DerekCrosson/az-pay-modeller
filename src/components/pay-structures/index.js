import React, { Component } from 'react';
import NavBar from '../nav-bar';

export default class PayStructures extends Component {

    constructor(){
        super();
        this.state = {
            current: {
                baseSalary: 0,
                advantageFund: 0,
                benefitFund: 0,
                projectedFund: 0,
                total: 0
            },
            proposed: {
                baseSalary: 0,
                advantageFund: 0,
                benefitFund: 0,
                projectedFund: 0,
                total: 0
            }
        }
    }

    componentWillMount(){
        this.loadData();
    }

    loadData(){
        const benefitFundPercent = 0.11;
        const baseBump = 0.2;
        let current = {
            baseSalary: 90000,
            advantageFund: 10000,
            benefitFund: 0,
            projectedFund: 0,
            total: 100000
        };

        const proposedSalary = current.baseSalary + (current.baseSalary * baseBump);
        const proposedBenefitFund = benefitFundPercent * proposedSalary;
        const proposedProjectedFund = current.baseSalary + current.advantageFund + proposedBenefitFund - proposedSalary;

        this.setState({
            current: current,
            proposed: {
                baseSalary: proposedSalary,
                advantageFund: 0,
                benefitFund: proposedBenefitFund,
                projectedFund: proposedProjectedFund,
                total: proposedSalary + proposedBenefitFund + proposedProjectedFund
            }
        });
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <div className="content">
                    <table>
                        <thead>
                        <tr>
                            <th>31 December 2016</th>
                            <th>Current</th>
                            <th>1 January 2019</th>
                            <th>Proposed</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Base</td>
                            <td>£{this.state.current.baseSalary}</td>
                            <td>Base + base bump</td>
                            <td>£{this.state.proposed.baseSalary}</td>
                        </tr>
                        <tr>
                            <td>Adv fund</td>
                            <td>£{this.state.current.advantageFund}</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>Benefit fund</td>
                            <td>£{this.state.proposed.benefitFund}</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>Projected fund</td>
                            <td>£{this.state.proposed.projectedFund}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>£{this.state.current.total}</td>
                            <td>Total</td>
                            <td>£{this.state.proposed.total}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


