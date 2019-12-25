import React from 'react';
import { Container, FormGroup, CustomInput } from 'reactstrap';
import Header from '../components/headers/Header';

const Settings = ({ toggleDarkTheme, DarkTheme }) => {

    return (
        <div>
            <Header name={'Settings'} />
            <Container>
                <div>
                    <FormGroup>
                        <CustomInput onChange={toggleDarkTheme} type="switch" checked={DarkTheme} id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode (Beta)" />
                    </FormGroup>
                </div>
            </Container>
        </div>
    );
}

export default Settings;
