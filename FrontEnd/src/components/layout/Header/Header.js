import React from 'react'

export default React.memo(function Header({ name }) {
  return (
    <div>
      <hr />
      <h1 data-testid="header-name" className='text-center' >{name}</h1>
      <hr />
    </div>
  )
})