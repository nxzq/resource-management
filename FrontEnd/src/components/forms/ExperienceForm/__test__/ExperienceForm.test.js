import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ExperienceForm from '../ExperienceForm';

afterEach(cleanup);

describe('Test ExperienceForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ExperienceForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExperienceForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});