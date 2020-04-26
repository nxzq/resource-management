import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';

afterEach(cleanup);

describe('Test Settings', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ThemeContextProvider dark={true}>
        <Settings />
      </ThemeContextProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

});