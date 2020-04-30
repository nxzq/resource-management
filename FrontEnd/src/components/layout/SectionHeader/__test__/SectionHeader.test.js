import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SectionHeader from '../SectionHeader';

afterEach(cleanup);

describe('Test SectionHeader', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SectionHeader />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SectionHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});