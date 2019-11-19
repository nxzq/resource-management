import React from 'react';
import { Label, Input, FormGroup, Row } from 'reactstrap';

const AboutForm = ({ FirstName, LastName, Role, Email, Phone, LinkedIn, GitHub, PersonalSite, handleChange }) => {
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="FirstName">First Name</Label>
                    <Input type="text" spellCheck="false" name="FirstName" id="FirstName" placeholder="First Name" value={FirstName} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="LastName">Last Name</Label>
                    <Input type="text" spellCheck="false" name="LastName" id="LastName" placeholder="Last Name" value={LastName} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Role">Role</Label>
                    <Input type="text" name="Role" id="role" placeholder="Title/Role" value={Role} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Email">Email</Label>
                    <Input type="email" name="Email" id="Email" placeholder="Email Address" value={Email} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Phone">Phone</Label>
                    <Input type="tel" maxLength="9" pattern="([0-9]{3})[0-9]{3}-[0-9]{4}" name="Phone" id="Phone" placeholder="Phone Number" value={Phone} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="LinkedIn">LinkedIn</Label>
                    <Input type="text" name="LinkedIn" id="LinkedIn" placeholder="linkedin.com/in/yourlink (Optional)" value={LinkedIn} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="GitHub">GitHub</Label>
                    <Input type="text" name="GitHub" id="GitHub" placeholder="github.com/youraccount (Optional)" value={GitHub} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="PersonalSite">Personal Website</Label>
                    <Input type="text" name="PersonalSite" id="PersonalSite" placeholder="www.yoursiteurl.com (Optional)" value={PersonalSite} onChange={handleChange} />
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default AboutForm