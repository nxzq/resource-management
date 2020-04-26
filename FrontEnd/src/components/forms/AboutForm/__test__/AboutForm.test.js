import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AboutForm from '../AboutForm';

afterEach(cleanup);

describe('Test AboutForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<AboutForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});