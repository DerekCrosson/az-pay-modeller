import React from 'react';
import NavBar from './index';
import Item from './index';
import { shallow } from 'enzyme';

it('renders NavBar without crashing', () => {
    shallow(<NavBar />);
});

it('renders Item without crashing', () => {
    const link = {name: 'Projection and modelling', to: '/projection', icon: 'fa fa-line-chart'};
    shallow(<Item item={link} />);
});