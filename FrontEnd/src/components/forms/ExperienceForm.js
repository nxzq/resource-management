import React from 'react';
import { Label, Input, FormGroup, Row, Button, CustomInput } from 'reactstrap';

const ExperienceForm = ({index, removeExperience}) => {
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expTitle">Title</Label>
                    <Input type="text" name="expName" id="expName" placeholder="Title/Role" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expAssociation">Association</Label>
                    <Input type="text" name="expAssociation" id="expAssociation" placeholder="Experience Association" />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="expStartDate">Start Date</Label>
                    <Input
                    type="date"
                    name="expStartDate"
                    id="expStartDate"
                    placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="expEndDate">Start Date</Label>
                    <Input
                    type="date"
                    name="expEndDate"
                    id="expEndDate"
                    placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup style={{ marginTop: '40px' }} className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Current Position" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expDetails1">Details</Label>
                    <Input type="textarea" name="expDetails1" id="expDetails1" placeholder="Experience Details" />
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