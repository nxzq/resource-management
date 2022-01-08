import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import EducationForm from '../EducationForm'

afterEach(cleanup)

it('matches snapshot', async () => {
  const tree = renderer.create(<EducationForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(<EducationForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Input Fields', () => {
  const handleEducationChange = jest.fn()
  it('School Input triggers handleEducationChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const schoolInput = queryByPlaceholderText('Education/University')
    fireEvent.change(schoolInput, { target: { value: 'test' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
  it('Location Input triggers handleEducationChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const locationInput = queryByPlaceholderText('University Location')
    fireEvent.change(locationInput, { target: { value: 'test' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
  it('Degree Input triggers handleEducationChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const degreeInput = queryByPlaceholderText('Degree Obtained')
    fireEvent.change(degreeInput, { target: { value: 'Bachelor' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
  it('Date Input triggers handleEducationChange onChange', async () => {
    const { queryByTestId } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const dateInput = queryByTestId('educationDateInput')
    fireEvent.change(dateInput, { target: { value: '0001-01-01' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
  it('Major(s) Input triggers handleEducationChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const majorInput = queryByPlaceholderText('Declared Major(s)')
    fireEvent.change(majorInput, { target: { value: 'test' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
  it('Minor(s) Input triggers handleEducationChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <EducationForm handleEducationChange={handleEducationChange} />
    )
    const minorInput = queryByPlaceholderText('Declared Minor(s)')
    fireEvent.change(minorInput, { target: { value: 'test' } })
    expect(handleEducationChange).toHaveBeenCalled()
  })
})

describe('Remove Button', () => {
  it('Button Removes Education onClick', async () => {
    const removeEducation = jest.fn()
    const { queryByText } = render(
      <EducationForm removeEducation={removeEducation} />
    )
    fireEvent.click(queryByText('Remove Education'))
    expect(removeEducation).toHaveBeenCalled()
  })
})
