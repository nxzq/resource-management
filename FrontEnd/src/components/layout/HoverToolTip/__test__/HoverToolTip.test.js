import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HoverToolTip from '../HoverToolTip';

afterEach(cleanup);

describe('Test HoverToolTip', () => {

  it('matches snapshot', () => {
    const div = document.createElement('div');
    const tree = renderer.create(
      <HoverToolTip target={div} placement='bottom' content='TEST'/>
     ).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HoverToolTip target={div} placement='bottom' content='TEST'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});