import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SkillCollapse from '../SkillCollapse';

afterEach(cleanup);

describe('Test SkillCollapse', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SkillCollapse />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});