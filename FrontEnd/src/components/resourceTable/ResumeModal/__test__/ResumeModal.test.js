import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResumeModal from '../ResumeModal';

afterEach(cleanup);

describe('Test ResumeModal', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ResumeModal />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});