import React from 'react';
import { Label, Input, FormGroup, Row, Button, CustomInput } from 'reactstrap';

const ExperienceForm = ({ index, removeExperience, JobTitle, JobOrg, JobStartDate, JobEndDate, JobInfo, handleExperienceChange }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobTitle">Title</Label>
                    <Input type="text" name="JobTitle" id="JobTitle" placeholder="Title/Role" value={JobTitle} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobOrg">Association</Label>
                    <Input type="text" name="JobOrg" id="JobOrg" placeholder="Experience Association" value={JobOrg} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="JobStartDate">Start Date</Label>
                    <Input type="number" name="JobStartDate" id="JobStartDate" min="1900" max={today.getFullYear()} step="1" placeholder="Start Date" value={JobStartDate} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="JobEndDate">End Date</Label>
                    <Input type="number" name="JobEndDate" id="JobEndDate" min="1900" max={today.getFullYear()} step="1" placeholder="End Date" value={JobEndDate} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup style={{ marginTop: '40px' }} className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Current Position" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobInfo">Details</Label>
                    <Input type="textarea" name="JobInfo" id="JobInfo" placeholder="Experience Details" value={JobInfo} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeExperience(index) }} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ExperienceForm