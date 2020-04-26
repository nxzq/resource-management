import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

afterEach(cleanup);

describe('Test Footer', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});