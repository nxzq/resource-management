import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResumeUpload from '../ResumeUpload';

afterEach(cleanup);

describe('Test ResumeUpload', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ResumeUpload />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});