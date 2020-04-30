import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SkillForm from '../SkillForm';

afterEach(cleanup);

describe('Test SkillForm', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<SkillForm />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SkillForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});