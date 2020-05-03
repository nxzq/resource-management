import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SkillForm from '../SkillForm';

afterEach(cleanup);

it('matches snapshot', async () => {
  const tree = renderer.create(<SkillForm />).toJSON()
  expect(tree).toMatchSnapshot();
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skill Select Input', () => {
  it('handles undefined state', async () => {
    const {queryByTestId} = render(<SkillForm skills={undefined} />);
    expect(queryByTestId('skillSelect')).toBeNull();
  });
  it('handles defined state', async () => {
    const {queryByTestId} = render(<SkillForm skills={['Java']} />);
    expect(queryByTestId('skillSelect')).toBeNull();
  });
  // it('Details Input triggers handleChange onChange', async () => {
  //   const {queryByTestId} = render(<SkillForm />);
  //   const skillInput = queryByTestId('skillSelect');
  //   fireEvent.change(skillInput, {target: {value: ["test"]}});
  //   expect(handleChange).toHaveBeenCalled();
  // });
});