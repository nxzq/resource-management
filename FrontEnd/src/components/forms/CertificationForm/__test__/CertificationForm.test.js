import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CertificationForm from '../CertificationForm';

afterEach(cleanup);

describe('Test CertificationForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<CertificationForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});