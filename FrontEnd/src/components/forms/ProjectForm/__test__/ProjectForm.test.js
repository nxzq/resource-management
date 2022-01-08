import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ProjectForm from '../ProjectForm'

afterEach(cleanup)

it('matches snapshot', async () => {
  const tree = renderer.create(<ProjectForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Input Fields', () => {
  const handleProjectChange = jest.fn()
  it('Name Input triggers handleProjectChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <ProjectForm handleProjectChange={handleProjectChange} />
    )
    const nameInput = queryByPlaceholderText('Project Name')
    fireEvent.change(nameInput, { target: { value: 'test' } })
    expect(handleProjectChange).toHaveBeenCalled()
  })
  it('Year Input triggers handleProjectChange onChange', async () => {
    const { queryByTestId } = render(
      <ProjectForm handleProjectChange={handleProjectChange} />
    )
    const dateInput = queryByTestId('projectDateInput')
    fireEvent.change(dateInput, { target: { value: '2000' } })
    expect(handleProjectChange).toHaveBeenCalled()
  })
  it('Association Input triggers handleProjectChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <ProjectForm handleProjectChange={handleProjectChange} />
    )
    const associationInput = queryByPlaceholderText('Project Association')
    fireEvent.change(associationInput, { target: { value: 'test' } })
    expect(handleProjectChange).toHaveBeenCalled()
  })
  it('Details Input triggers handleProjectChange onChange', async () => {
    const { queryByPlaceholderText } = render(
      <ProjectForm handleProjectChange={handleProjectChange} />
    )
    const associationInput = queryByPlaceholderText('Project Details')
    fireEvent.change(associationInput, { target: { value: 'test' } })
    expect(handleProjectChange).toHaveBeenCalled()
  })
})

describe('Remove Button', () => {
  it('Button Removes Project onClick', async () => {
    const removeProject = jest.fn()
    const { queryByText } = render(
      <ProjectForm removeProject={removeProject} />
    )
    fireEvent.click(queryByText('Remove Project'))
    expect(removeProject).toHaveBeenCalled()
  })
})
