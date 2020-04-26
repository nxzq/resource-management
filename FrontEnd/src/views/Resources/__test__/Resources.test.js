import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Resources from '../Resources';
import FilterContextProvider from '../../../contexts/FilterContext';

afterEach(cleanup);

describe('Test Resources', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <FilterContextProvider>
        <Resources />
      </FilterContextProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

});