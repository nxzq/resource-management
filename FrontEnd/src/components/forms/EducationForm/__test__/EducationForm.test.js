import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EducationForm from '../EducationForm';

afterEach(cleanup);

describe('Test EducationForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<EducationForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EducationForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});