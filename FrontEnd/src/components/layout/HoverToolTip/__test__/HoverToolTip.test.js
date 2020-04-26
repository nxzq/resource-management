import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HoverToolTip from '../HoverToolTip';

afterEach(cleanup);

describe('Test HoverToolTip', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<HoverToolTip />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});