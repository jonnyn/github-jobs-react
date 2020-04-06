import React from 'react';
import { shallow } from 'enzyme';
import { FilteringPanel } from './FilteringPanel';

const enzymeWrapper = shallow(<FilteringPanel />)

it('renders FilteringPanel without crashing', () => {  
    expect(enzymeWrapper.exists()).toBe(true);
});

it('renders correctly FilteringPanel section', () => {  
    expect(enzymeWrapper).toMatchSnapshot();
});
