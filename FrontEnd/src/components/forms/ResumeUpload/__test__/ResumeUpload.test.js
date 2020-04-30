import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResumeUpload from '../ResumeUpload';

afterEach(cleanup);

describe('Test ResumeUpload', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<ResumeUpload />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResumeUpload />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});