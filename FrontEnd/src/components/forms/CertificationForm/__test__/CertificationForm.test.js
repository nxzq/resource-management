import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CertificationForm from '../CertificationForm'

afterEach(cleanup)

it('matches snapshot', async () => {
  const tree = renderer.create(<CertificationForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing', async () => {
  const div = document.createElement('div')
  ReactDOM.render(<CertificationForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('Input Fields', () => {
  const handleCertificationChange = jest.fn()
  it('Name Input triggers handleCertificationChange onChange', async () => {
    const { queryByPlaceholderText } = render(<CertificationForm handleCertificationChange={handleCertificationChange} />)
    const nameInput = queryByPlaceholderText('Certification Name')
    fireEvent.change(nameInput, { target: { value: 'test' } })
    expect(handleCertificationChange).toHaveBeenCalled()
  })
  it('Date Input triggers handleCertificationChange onChange', async () => {
    const { queryByTestId } = render(<CertificationForm handleCertificationChange={handleCertificationChange} />)
    const dateInput = queryByTestId('certDateInput')
    fireEvent.change(dateInput, { target: { value: '0001-01-01' } })
    expect(handleCertificationChange).toHaveBeenCalled()
  })
  it('Association Input triggers handleCertificationChange onChange', async () => {
    const { queryByPlaceholderText } = render(<CertificationForm handleCertificationChange={handleCertificationChange} />)
    const associationInput = queryByPlaceholderText('Certification Association')
    fireEvent.change(associationInput, { target: { value: 'test' } })
    expect(handleCertificationChange).toHaveBeenCalled()
  })
})

describe('Remove Button', () => {
  it('Button Removes Certification onClick', async () => {
    const removeCertification = jest.fn()
    const { queryByText } = render(<CertificationForm removeCertification={removeCertification} />)
    fireEvent.click(queryByText('Remove Certification'))
    expect(removeCertification).toHaveBeenCalled()
  })
})