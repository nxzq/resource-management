import React from 'react'
import { Container } from 'reactstrap'
import Header from '../../layout/Header/Header'

export default function Help() {
  return (
    <div>
      <Header name={'Help'} />
      <Container>
        <div>
          <h2>Shortcuts:</h2>
          <p>Navigate to Resource Page: &nbsp;&nbsp; SHIFT + r</p>
          <p>
            Navigate to Help Page:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SHIFT + h
          </p>
          <p>Navigate to Settings Page: &nbsp;&nbsp;&nbsp; SHIFT + s</p>
        </div>
      </Container>
    </div>
  )
}
