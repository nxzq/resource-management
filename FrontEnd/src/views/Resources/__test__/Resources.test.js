import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Resources from '../Resources';
import FilterContextProvider from '../../../contexts/FilterContext';

afterEach(cleanup);

describe('Test Resources', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <FilterContextProvider>
          <Route path='/resources' component={Resources} />
        </FilterContextProvider>
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

});