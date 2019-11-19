import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';


const EducationForm = ({ index, removeEducation, School, Location, Degree, Major, Minor, GradDate, handleEducationChange }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="School">School</Label>
                    <Input type="text" name="School" id="School" placeholder="Education/University" value={School} onChange={(e) => { handleEducationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Location">Location</Label>
                    <Input type="text" name="Location" id="Location" placeholder="University Location" value={Location} onChange={(e) => { handleEducationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Degree">Degree</Label>
                    <Input type="select" name="Degree" id="Degree" placeholder="Degree Obtained" value={Degree} onChange={(e) => { handleEducationChange(index, e) }} >
                        <option value='' selected disabled>Please Select</option>
                        <option>Associate</option>
                        <option>Bachelor</option>
                        <option>Master</option>
                        <option>PhD</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <Label for="GradDate">Graduation Date</Label>
                    <Input type="number" name="GradDate" id="GradDate" min="1900" max={today.getFullYear()} step="1" placeholder="Graduation Year" value={GradDate} onChange={(e) => { handleEducationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Major">Major(s)</Label>
                    <Input type="text" name="Major" id="Major" placeholder="Declared Major(s)" value={Major} onChange={(e) => { handleEducationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="Minor">Minor(s)</Label>
                    <Input type="text" name="Minor" id="Minor" placeholder="Declared Minor(s)" value={Minor} onChange={(e) => { handleEducationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeEducation(index) }} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default EducationForm