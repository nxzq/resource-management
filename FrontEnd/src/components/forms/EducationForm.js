import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';


const EducationForm = ({ index, removeEducation, School, Location, Degree, Major, Minor, GradDate }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="school">School</Label>
                    <Input type="text" name="school" id="school" placeholder="Education/University" value={School} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="location">Location</Label>
                    <Input type="text" name="location" id="location" placeholder="University Location" value={Location} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="degree">Degree</Label>
                    <Input type="select" name="degree" id="degree" placeholder="Degree Obtained" value={Degree}>
                        <option value='' selected disabled>Please Select</option>
                        <option>Associate</option>
                        <option>Bacholor</option>
                        <option>Master</option>
                        <option>PhD</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="degree">Major</Label>
                    <Input type="text" name="degree" id="degree" placeholder="Declared Major" value={Major} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="gradDate">Graduation Date</Label>
                    <Input type="number" min="1900" max={today.getFullYear()} step="1" placeholder="Graduation Year" value={GradDate} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => {removeEducation(index)}} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default EducationForm