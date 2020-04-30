import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Overview from '../Overview';

afterEach(cleanup);

describe('Test Overview', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Overview />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Overview />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});