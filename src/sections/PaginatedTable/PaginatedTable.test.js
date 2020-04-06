import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { PaginatedTable } from './PaginatedTable';

it('renders PaginatedTable without crashing', () => {  
    const wrapper = shallow(<PaginatedTable />);
    expect(wrapper.exists()).toBe(true);
});

it('renders correctly PaginatedTable section', () => {  
    const wrapper = shallow(<PaginatedTable />);
    expect(wrapper).toMatchSnapshot();
});
