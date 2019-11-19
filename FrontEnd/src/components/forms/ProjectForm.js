import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

const ProjectForm = ({ index, removeProject, ProjName, ProjDate, ProjAssociation, ProjInfo, handleProjectChange }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="ProjName">Name</Label>
                    <Input type="text" name="ProjName" id="ProjName" placeholder="Project Name" value={ProjName} onChange={(e) => { handleProjectChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="ProjDate">Date</Label>
                    <Input type="number" name="ProjDate" id="ProjDate" min="1900" max={today.getFullYear()} step="1" placeholder="Project Date" value={ProjDate} onChange={(e) => { handleProjectChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="ProjAssociation">Association</Label>
                    <Input type="text" name="ProjAssociation" id="ProjAssociation" placeholder="Project Association" value={ProjAssociation} onChange={(e) => { handleProjectChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="ProjInfo">Details</Label>
                    <Input type="textarea" name="ProjInfo" id="ProjInfo" placeholder="Project Details" value={ProjInfo} onChange={(e) => { handleProjectChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeProject(index) }} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ProjectForm