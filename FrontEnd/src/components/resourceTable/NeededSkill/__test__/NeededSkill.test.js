import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NeededSkill from '../NeededSkill';

afterEach(cleanup);

describe('Test NeededSkill', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<NeededSkill skills={['Java']} />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NeededSkill skills={['Java']} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});