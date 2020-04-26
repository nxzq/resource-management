import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EditResource from '../EditResource';

afterEach(cleanup);

describe('Test EditResource', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
          <Route path='/editresource/:id' component={EditResource} />
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

});