import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddResource from '../AddResource';

afterEach(cleanup);

it('matches snapshot', () => {
  const tree = renderer.create(<AddResource />).toJSON()
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddResource />, div);
  ReactDOM.unmountComponentAtNode(div);
});