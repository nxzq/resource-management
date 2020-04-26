import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, FormGroup, CustomInput } from 'reactstrap';
import Header from '../../components/layout/Header/Header';
import { ThemeContext } from '../../theme/ThemeContext'

const Settings = () => {

    const { dark, toggleTheme } = useContext(ThemeContext);
    const page = useRef();
    const [ready, setReady] = useState(false)

    const handleEnter = (e) => {
        if (e.keyCode === 13) toggleTheme()
    }

    useEffect(() => {
        if (page.current) {
            setReady(true)
            page.current.focus()
        }
    }, [page.current])

    return (
        <div tabIndex={-1} ref={page} class="page">
            <Header name={'Settings'} />
            <Container>
                <div>
                    <FormGroup>
                        <CustomInput onChange={toggleTheme} onKeyDown={handleEnter} type="switch" checked={dark} id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode (Beta)" />
                    </FormGroup>
                </div>
            </Container>
        </div>
    );
}

export default Settings;
