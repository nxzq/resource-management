import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header';

afterEach(cleanup);

describe('Test Header', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});