import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar';

afterEach(cleanup);

describe('Test NavBar', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});