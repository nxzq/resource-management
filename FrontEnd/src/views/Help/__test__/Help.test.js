import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Help from '../Help';

afterEach(cleanup);

describe('Test Help', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Help />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Help />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});