import React, { useContext } from 'react';
import { Container, FormGroup, CustomInput } from 'reactstrap';
import Header from '../components/headers/Header';
import { ThemeContext } from '../theme/ThemeContext'

const Settings = () => {

    const { dark, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <Header name={'Settings'} />
            <Container>
                <div>
                    <FormGroup>
                        <CustomInput onChange={toggleTheme} type="switch" checked={dark} id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode (Beta)" />
                    </FormGroup>
                </div>
            </Container>
        </div>
    );
}

export default Settings;
