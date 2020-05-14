import React from 'react';
import ReactDOM from 'react-dom';
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

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FilterContextProvider>
          <Route path='/resources' component={Resources} />
        </FilterContextProvider>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});