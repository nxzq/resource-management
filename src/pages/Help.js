import React from 'react';
import { Container, Button, FormGroup, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Help = () => {

    return (
        <div>
            <Header name={'Help'} />
            <Container>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <FormGroup>
                        <CustomInput type="switch" id="darkModeSwitch" name="darkModeSwitch" label="Dark Mode" />
                    </FormGroup>
                </div>
                <Header name={'Additional Links'} />
                <Link to="/addresource" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                    <Button type="button" color="primary">Add Resource Form</Button>
                </Link>
                <Link to="/profile" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                    <Button type="button" color="primary">Proifle Page</Button>
                </Link>
                <Link to="/addjob" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
                    <Button type="button" color="primary">Add Job Page</Button>
                </Link>
            </Container>
        </div>
    );
}

export default Help;