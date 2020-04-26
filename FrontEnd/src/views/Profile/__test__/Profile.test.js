import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Profile from '../Profile';

afterEach(cleanup);

describe('Test Profile', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Route path='/profile/:id' component={Profile} />
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

});