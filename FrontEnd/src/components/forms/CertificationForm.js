import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

const CertificationForm = ({ index, removeCertification, CertName, CertDate, CertAssociation, handleCertificationChange }) => {
    var today = new Date();
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="CertName">Name</Label>
                    <Input type="text" name="CertName" id="CertName" placeholder="Certification Name" value={CertName} onChange={(e) => { handleCertificationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="CertDate">Date</Label>
                    <Input type="number" name="CertDate" id="CertDate" min="1900" max={today.getFullYear()} step="1" placeholder="Certification Date" value={CertDate} onChange={(e) => { handleCertificationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="CertAssociation">Association</Label>
                    <Input type="text" name="CertAssociation" id="CertAssociation" placeholder="Certification Association" value={CertAssociation} onChange={(e) => { handleCertificationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeCertification(index) }} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default CertificationForm;