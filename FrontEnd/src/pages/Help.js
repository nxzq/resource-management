import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/headers/Header';

const Help = () => {

    return (
        <div>
            <Header name={'Help'} />
            <Container>
                <div>
                    <h2>How To:</h2>
                    <p>Coming Soon...</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h2>Shortcuts:</h2>
                    <p>Navigate to Overview Page: &nbsp;&nbsp; SHIFT + o</p> 
                    <p>Navigate to Resource Page: &nbsp;&nbsp; SHIFT + r</p> 
                    <p>Navigate to Help Page: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SHIFT + h</p> 
                    <p>Navigate to Settings Page: &nbsp;&nbsp;&nbsp; SHIFT + s</p> 
                </div>
            </Container>
        </div>
    );
}

export default Help;