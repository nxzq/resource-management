import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

export default function CertificationForm({ index, removeCertification, CertName, CertDate, CertAssociation, handleCertificationChange }) {

    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="CertName">Name</Label>
                    <Input required type="text" name="CertName" id="CertName" placeholder="Certification Name" value={CertName} onChange={(e) => { handleCertificationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="GradDate">Date Achieved</Label>
                    <Input
                        required
                        type="date"
                        name="CertDate"
                        id="CertDate"
                        value={CertDate}
                        data-testid="certDateInput"
                        placeholder="date placeholder"
                        onChange={(e) => { handleCertificationChange(index, e) }}
                    />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="CertAssociation">Association</Label>
                    <Input required type="text" name="CertAssociation" id="CertAssociation" placeholder="Certification Association" value={CertAssociation} onChange={(e) => { handleCertificationChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeCertification(index) }} style={{ marginTop: '32px' }} color="danger">Remove Certification</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
};