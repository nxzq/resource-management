import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from '../NavBar';
import ThemeContextProvider from '../../../../theme/ThemeContext';

afterEach(cleanup);

describe('Test NavBar', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(
    <ThemeContextProvider>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeContextProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeContextProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ThemeContextProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});