import React from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';

const CertificationForm = ({ index, removeCertification, CertName, CertDate, CertAssociation }) => {
    var today = new Date();
    return (
        <div>
            <Row>
            <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="certName">Name</Label>
                    <Input type="text" name="certName" id="certName" placeholder="Certification Name" value={CertName} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="certDate">Date</Label>
                    <Input type="number" min="1900" max={today.getFullYear()} step="1" defaultValue={today.getFullYear()} value={CertDate} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="certAssociation">Association</Label>
                    <Input type="text" name="certAssociation" id="certAssociation" placeholder="Certification Association" value={CertAssociation} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => {removeCertification(index)}} style={{ marginTop: '32px' }} color="danger">Remove Education</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default CertificationForm;