import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Help from '../Help';

afterEach(cleanup);

describe('Test Help', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Help />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});