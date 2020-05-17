import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import renderer from 'react-test-renderer'
import HoverToolTip from '../HoverToolTip'

afterEach(cleanup)

// global.document.createRange = () => ({
//   setStart: () => {},
//   setEnd: () => {},
//   commonAncestorContainer: {
//     nodeName: 'BODY',
//     ownerDocument: document,
//   },
// });

it('matches snapshot', async () => {
  const div = document.createElement('div')
  const tree = renderer.create(
    <HoverToolTip target={div} placement='bottom' content='TEST'/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <HoverToolTip target={div} placement='bottom' content='TEST'/>, div)
  ReactDOM.unmountComponentAtNode(div)
})


// it('hover fires toggle for tooltip', () => {
//   const toggle = jest.fn();
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <HoverToolTip target={div} placement='bottom' content='TEST' />, div);
//   act(() => {
//     fireEvent(div, new MouseEvent('mouseover', {
//       bubbles: true,
//       cancelable: true,
//     }));
//   });
//   expect(toggle).not.toHaveBeenCalled();
// });