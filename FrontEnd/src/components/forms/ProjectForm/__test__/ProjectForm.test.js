import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProjectForm from '../ProjectForm';

afterEach(cleanup);

describe('Test ProjectForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ProjectForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});