import React from 'react';
import AppButton from './AppButton';
import renderer from 'react-test-renderer';

it('renders Go button when is not loading', () => {
  const component = renderer.create(<AppButton label='Go' />,);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders loading button when isLoading set to true', () => {
    const component = renderer.create(<AppButton label='Go' isLoading />,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });