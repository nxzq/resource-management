import React from 'react';
import { Label, Input, FormGroup, Row, Button, CustomInput } from 'reactstrap';

const ExperienceForm = ({ index, removeExperience, JobTitle, JobOrg, JobStartDate, JobEndDate, JobInfo }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expTitle">Title</Label>
                    <Input type="text" name="expName" id="expName" placeholder="Title/Role" value={JobTitle} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expAssociation">Association</Label>
                    <Input type="text" name="expAssociation" id="expAssociation" placeholder="Experience Association" value={JobOrg} />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="expStartDate">Start Date</Label>
                    <Input type="number" min="1900" max={today.getFullYear()} step="1" defaultValue={today.getFullYear()} value={JobStartDate} />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="expEndDate">Start Date</Label>
                    <Input type="number" min="1900" max={today.getFullYear()} step="1" defaultValue={today.getFullYear()} value={JobEndDate} />
                </FormGroup>
                <FormGroup style={{ marginTop: '40px' }} className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Current Position" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expDetails1">Details</Label>
                    <Input type="textarea" name="expDetails1" id="expDetails1" placeholder="Experience Details" value={JobInfo} />
                </FormGroup>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => {removeExperience(index)}} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ExperienceForm