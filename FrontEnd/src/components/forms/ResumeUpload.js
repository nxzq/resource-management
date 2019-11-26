import React from 'react';
import { Label, CustomInput, FormGroup, Row } from 'reactstrap';

const ResumeUpload = () => {
    return (
        <div>
            <Row>
            <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <Label for="ResumeUpload">File Browser</Label>
                <CustomInput type="file" id="ResumeUpload" name="ResumeUpload" required/>
            </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ResumeUpload