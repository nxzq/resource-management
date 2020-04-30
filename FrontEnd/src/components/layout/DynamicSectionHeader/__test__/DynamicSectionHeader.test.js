import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DynamicSectionHeader from '../DynamicSectionHeader';

afterEach(cleanup);

describe('Test DynamicSectionHeader', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<DynamicSectionHeader />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DynamicSectionHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const { getByTestId } = render(<DynamicSectionHeader name={'test'} />);
    expect(getByTestId("dynamic-header-name").textContent).toBe("test");
  });

});