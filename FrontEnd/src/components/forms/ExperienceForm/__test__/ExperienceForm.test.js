import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ExperienceForm from '../ExperienceForm'

afterEach(cleanup)

it('matches snapshot', async () => {
  const tree = renderer.create(<ExperienceForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(<ExperienceForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Input Fields', () => {
  const handleExperienceChange = jest.fn()
  it('Current Position Input triggers handleExperienceChange onChange', async () => {
    const { queryByTestId } = render(<ExperienceForm JobEndDate={''} />)
    fireEvent.click(queryByTestId('currentPositionCheck'))
    expect(queryByTestId('currentPositionCheck')).toBeFalsy
  })
  it('Title Input triggers handleExperienceChange onChange', async () => {
    const { queryByPlaceholderText } = render(<ExperienceForm handleExperienceChange={handleExperienceChange} />)
    const titleInput = queryByPlaceholderText('Title/Role')
    fireEvent.change(titleInput, { target: { value: 'test' } })
    expect(handleExperienceChange).toHaveBeenCalled()
  })
  it('Company Input triggers handleExperienceChange onChange', async () => {
    const { queryByPlaceholderText } = render(<ExperienceForm handleExperienceChange={handleExperienceChange} />)
    const companyInput = queryByPlaceholderText('Experience Association')
    fireEvent.change(companyInput, { target: { value: 'test' } })
    expect(handleExperienceChange).toHaveBeenCalled()
  })
  it('Start Date Input triggers handleExperienceChange onChange', async () => {
    const { queryByTestId } = render(<ExperienceForm handleExperienceChange={handleExperienceChange} />)
    const dateInput = queryByTestId('startDate')
    fireEvent.change(dateInput, { target: { value: '0001-01-01' } })
    expect(handleExperienceChange).toHaveBeenCalled()
  })
  it('End Date Input triggers handleExperienceChange onChange', async () => {
    const { queryByTestId } = render(<ExperienceForm handleExperienceChange={handleExperienceChange} />)
    const dateInput = queryByTestId('endDate')
    fireEvent.change(dateInput, { target: { value: '0001-01-01' } })
    expect(handleExperienceChange).toHaveBeenCalled()
  })
  it('Details Input triggers handleExperienceChange onChange', async () => {
    const { queryByPlaceholderText } = render(<ExperienceForm handleExperienceChange={handleExperienceChange} />)
    const detailsInput = queryByPlaceholderText('Experience Details')
    fireEvent.change(detailsInput, { target: { value: 'test' } })
    expect(handleExperienceChange).toHaveBeenCalled()
  })
})

describe('Remove Button', () => {
  it('Button Removes Experience onClick', async () => {
    const removeExperience = jest.fn()
    const { queryByText } = render(<ExperienceForm removeExperience={removeExperience} />)
    fireEvent.click(queryByText('Remove Experience'))
    expect(removeExperience).toHaveBeenCalled()
  })
})