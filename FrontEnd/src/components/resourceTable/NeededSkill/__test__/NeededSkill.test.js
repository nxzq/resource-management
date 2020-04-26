import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NeededSkill from '../NeededSkill';

afterEach(cleanup);

describe('Test NeededSkill', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<NeededSkill />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});