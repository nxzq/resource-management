import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SummaryForm from '../SummaryForm';

afterEach(cleanup);

describe('Test SummaryForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SummaryForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});