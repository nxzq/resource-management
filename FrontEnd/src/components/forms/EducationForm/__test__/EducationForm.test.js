import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EducationForm from '../EducationForm';

afterEach(cleanup);

describe('Test EducationForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<EducationForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});