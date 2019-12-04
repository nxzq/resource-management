import React from 'react';
import { CustomInput, FormGroup, Row, FormText } from 'reactstrap';

const ResumeUpload = () => {
    return (
        <div>
            <Row>
            <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <CustomInput type="file" id="ResumeUpload" name="ResumeUpload" accept="application/pdf" />
                <FormText color="muted">
                    Please upload your most up to date resume in PDF format.
                </FormText>
            </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ResumeUpload