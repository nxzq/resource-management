import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

export default React.memo(function Help() {

  return (
    <div>
      <Container>
        <div>
          <h2>404 Page Not Found</h2>
          <Link to="/">Return to Homepage</Link>
        </div>
      </Container>
    </div>
  )
})