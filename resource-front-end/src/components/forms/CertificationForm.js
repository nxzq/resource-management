import React from 'react';
import { Label, Input, FormGroup, Row } from 'reactstrap';

const CertificationForm = () => {
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="LastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="role">Role</Label>
                    <Input type="text" name="role" id="role" placeholder="Title/Role" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email Address" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="phone">Phone</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="linkedIn">LinkedIn</Label>
                    <Input type="text" name="linkedIn" id="linkedIn" placeholder="linkedin.com/in/yourlink" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="github">GitHub</Label>
                    <Input type="text" name="github" id="github" placeholder="github.com/youraccount" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="personalSite">Personal Website</Label>
                    <Input type="text" name="personalSite" id="personalSite" placeholder="www.yoursiteurl.com" />
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default CertificationForm