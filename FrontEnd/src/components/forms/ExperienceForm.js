import React, { useState } from 'react';
import { Label, Input, FormGroup, Row, Button, CustomInput } from 'reactstrap';

const ExperienceForm = ({ index, removeExperience, JobTitle, JobOrg, JobStartDate, JobEndDate, JobInfo, handleExperienceChange, CurrentPosition }) => {
    const [currentPosition, setCurrentPostion] = useState( JobEndDate === '' && index === 0 ? true : false)
    return (
        <div>
            <Row>
                { index === 0 ?
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" className="unselectable" label="Current Position" checked={currentPosition} onChange={() => {setCurrentPostion(!currentPosition)}} value={currentPosition} />
                </FormGroup>
                : null}
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobTitle">Title</Label>
                    <Input required type="text" name="JobTitle" id="JobTitle" placeholder="Title/Role" value={JobTitle} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobOrg">Company/Organization</Label>
                    <Input required type="text" name="JobOrg" id="JobOrg" placeholder="Experience Association" value={JobOrg} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Label for="JobStartDate">Start Date</Label>
                    <Input
                        required
                        type="date"
                        name="JobStartDate"
                        id="JobStartDate"
                        value={JobStartDate}
                        placeholder="date placeholder"
                        onChange={(e) => { handleExperienceChange(index, e) }}
                    />
                </FormGroup>
                { currentPosition === true && index === 0 ?
                <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Label for="JobStartDate">End Date</Label>
                    <Input
                        disabled
                        type="date"
                        name="JobEndDate"
                        id="JobEndDate"
                        value={JobEndDate}
                        placeholder="date placeholder"
                        onChange={(e) => { handleExperienceChange(index, e) }}
                    />
                </FormGroup>
                :
                <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Label for="JobStartDate">End Date</Label>
                    <Input
                        required
                        type="date"
                        name="JobEndDate"
                        id="JobEndDate"
                        value={JobEndDate}
                        placeholder="date placeholder"
                        onChange={(e) => { handleExperienceChange(index, e) }}
                    />
                </FormGroup>
                }
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="JobInfo">Details</Label>
                    <Input type="textarea" name="JobInfo" id="JobInfo" placeholder="Experience Details" value={JobInfo} onChange={(e) => { handleExperienceChange(index, e) }} />
                </FormGroup>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                    <Button onClick={() => { removeExperience(index) }} style={{ marginTop: '32px' }} color="danger">Remove Experience</Button>
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
}

export default ExperienceForm