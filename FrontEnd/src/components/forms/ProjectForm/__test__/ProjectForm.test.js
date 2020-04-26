import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ProjectForm from '../ProjectForm';

afterEach(cleanup);

describe('Test ProjectForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ProjectForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});