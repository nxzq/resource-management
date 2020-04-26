import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';
import ThemeContextProvider from '../../theme/ThemeContext';

afterEach(cleanup);

describe('Test App', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ThemeContextProvider dark={true}>
        <App />
      </ThemeContextProvider>).toJSON()
    expect(tree).toMatchSnapshot();
  });

});