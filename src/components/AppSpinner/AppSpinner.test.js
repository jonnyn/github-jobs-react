import React from 'react';
import AppSpinner from './AppSpinner';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<AppSpinner />,);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
