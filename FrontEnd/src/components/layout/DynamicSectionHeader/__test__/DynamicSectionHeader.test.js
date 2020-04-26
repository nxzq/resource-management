import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DynamicSectionHeader from '../DynamicSectionHeader';

afterEach(cleanup);

describe('Test DynamicSectionHeader', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<DynamicSectionHeader />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});