import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

const ProjectForm = ({index, removeProject}) => {
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="projName">Name</Label>
                    <Input type="text" name="projName" id="projName" placeholder="Project Name" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="projDate">Date</Label>
                    <Input
                    type="date"
                    name="projDate"
                    id="projDate"
                    placeholder="date placeholder"
                    />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="projAssociation">Association</Label>
                    <Input type="text" name="projAssociation" id="projAssociation" placeholder="Project Association" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="projDetails1">Details</Label>
                    <Input type="textarea" name="projDetails1" id="projDetails1" placeholder="Project Details" />
                </FormGroup>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => {removeProject(index)}} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ProjectForm