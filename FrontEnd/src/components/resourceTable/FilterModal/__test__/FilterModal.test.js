import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FilterModal from '../FilterModal';

afterEach(cleanup);

describe('Test FilterModal', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<FilterModal />).toJSON()
    expect(tree).toMatchSnapshot();
  });

});