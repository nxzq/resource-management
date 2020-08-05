import React, { useContext, useEffect, useRef } from 'react'
import { Container, FormGroup, CustomInput } from 'reactstrap'
import Header from '../../layout/Header/Header'
import { ThemeContext } from '../../../theme/ThemeContext'

export default function Settings() {

  const { dark, toggleTheme } = useContext(ThemeContext)
  const page = useRef()

  const handleEnter = (e) => {
    if (e.keyCode === 13) toggleTheme()
  }

  useEffect(() => {
    if (page.current) {
      page.current.focus()
    }
    // eslint-disable-next-line
    }, [page.current])

  return (
    <div tabIndex={-1} ref={page} className="page">
      <Header name={'Settings'} />
      <Container>
        <div>
          <FormGroup>
            <CustomInput onChange={toggleTheme} onKeyDown={handleEnter} type="switch" checked={dark} id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode (Beta)" />
          </FormGroup>
        </div>
      </Container>
    </div>
  )
}