import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SectionHeader from '../SectionHeader';

afterEach(cleanup);

describe('Test SectionHeader', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SectionHeader />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});