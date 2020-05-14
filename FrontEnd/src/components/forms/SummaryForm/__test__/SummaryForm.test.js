import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SummaryForm from '../SummaryForm';

afterEach(cleanup);

describe('Test SummaryForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SummaryForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SummaryForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});