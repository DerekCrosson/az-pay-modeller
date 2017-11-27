import React from 'react';
import Overview from './index';
import { shallow } from 'enzyme';

it('renders Overview without crashing', () => {
    shallow(<Overview />);
});
