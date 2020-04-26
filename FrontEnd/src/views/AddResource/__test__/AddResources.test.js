import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AddResource from '../AddResource';

afterEach(cleanup);

describe('Test AddResource', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<AddResource />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});