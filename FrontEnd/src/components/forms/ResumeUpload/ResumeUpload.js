import React from 'react';
import { CustomInput, FormGroup, Row, FormText } from 'reactstrap';
import ResumeModal from '../../resourceTable/ResumeModal/ResumeModal'

export default React.memo(function ResumeUpload({ resume, handleResume, existingResume, id, FirstName, LastName }) {
    return (
        <div>
            <Row>
            <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <CustomInput type="file" id="ResumeUpload" name="ResumeUpload" accept="application/pdf" value={resume} onChange={handleResume} />
                <FormText color="muted">
                    Please upload your most up to date resume in PDF format.
                </FormText>
            </FormGroup>
            <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                {existingResume ? 
                    <div className="text-center">
                        <ResumeModal id={id} FirstName={FirstName} LastName={LastName} />
                        <FormText color="muted">
                            Last Uploaded Resume
                        </FormText>
                    </div>
                : null}
            </FormGroup>
            </Row>
            <hr />
        </div>
    )
});