import React from 'react';
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header';

const NewHOC = (PassedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      )
    }
  }
}

afterEach(cleanup);

describe('Test Header', () => {

  it('matches snapshot', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const Component = NewHOC(Header)
    const { getByTestId } = render(<Header name={'test'} />);
    expect(getByTestId("header").textContent).toBe("test");
  });

});