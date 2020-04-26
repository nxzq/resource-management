import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SkillForm from '../SkillForm';

afterEach(cleanup);

describe('Test SkillForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SkillForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});