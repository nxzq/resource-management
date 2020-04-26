import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ExperienceForm from '../ExperienceForm';

afterEach(cleanup);

describe('Test ExperienceForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ExperienceForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});