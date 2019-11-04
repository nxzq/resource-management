import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

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
                    <Label for="exStartpDate">Start Date</Label>
                    <Input type="text" name="exStartpDate" id="exStartpDate" placeholder="Start Date" />
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label for="expEndDate">End Date</Label>
                    <Input type="text" name="expEndDate" id="expEndDate" placeholder="End Date" />
                </FormGroup>
                <FormGroup check className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4">
                    <Label style={{ marginTop: '35px' }} check >
                    <Input type="checkbox" />{' '}
                        Current Position
                    </Label>
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expDetails1">Details</Label>
                    <Input type="textarea" name="expDetails1" id="expDetails1" placeholder="Experience Details" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expDetails2">Details</Label>
                    <Input type="textarea" name="expDetails2" id="expDetails2" placeholder="Experience Details" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="expDetails3">Details</Label>
                    <Input type="textarea" name="expDetails3" id="expDetails3" placeholder="Experience Details" />
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