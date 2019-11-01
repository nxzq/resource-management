import React from 'react';
import { Label, Input, FormGroup, Row } from 'reactstrap';


const EducationForm = () => {
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="school">School</Label>
                    <Input type="text" name="school" id="school" placeholder="Education/University" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="location">Location</Label>
                    <Input type="text" name="location" id="location" placeholder="University Location" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="degree">Degree</Label>
                    <Input type="select" name="degree" id="degree" placeholder="Degree Obtained">
                        <option>Associate</option>
                        <option>Bacholor</option>
                        <option>Master</option>
                        <option>PhD</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="degree">Major</Label>
                    <Input type="text" name="degree" id="degree" placeholder="Declared Major" />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="gradDate">Graduation Date</Label>
                    <Input type="text" name="gradDate" id="gradDate" placeholder="Graduation Date" />
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default EducationForm