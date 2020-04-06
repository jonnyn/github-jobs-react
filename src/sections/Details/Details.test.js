import React from 'react';
import { shallow } from 'enzyme';
import { Details } from './Details';

const setup = () => {
    const props = {
        dispatch: jest.fn(),
        match: {params: {jobId: 'fakeId'}}
    }
    const enzymeWrapper = shallow(<Details {...props} />)

    return {
        props,
        enzymeWrapper
    }
};

it('renders Details without crashing', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.exists()).toBe(true);
});

it('renders correctly loading state', () => { 
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
});