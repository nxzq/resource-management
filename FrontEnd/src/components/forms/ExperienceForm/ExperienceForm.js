import React, { useState } from 'react'
import { Label, Input, FormGroup, Row, Button } from 'reactstrap'

export default React.memo(function ExperienceForm({
  index,
  removeExperience,
  JobTitle,
  JobOrg,
  JobStartDate,
  JobEndDate,
  JobInfo,
  handleExperienceChange,
}) {
  const [currentPosition, setCurrentPostion] = useState(
    JobEndDate === '' ? true : false
  )

  return (
    <div>
      <Row>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                className="unselectable"
                checked={currentPosition}
                data-testid="currentPositionCheck"
                onChange={() => {
                  setCurrentPostion(!currentPosition)
                }}
                value={currentPosition}
              />{' '}
              Current Position
            </Label>
          </FormGroup>
        </div>
        <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Label for="JobTitle">Title</Label>
          <Input
            required
            type="text"
            name="JobTitle"
            id="JobTitle"
            placeholder="Title/Role"
            value={JobTitle}
            onChange={(e) => {
              handleExperienceChange(index, e)
            }}
          />
        </FormGroup>
        <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Label for="JobOrg">Company/Organization</Label>
          <Input
            required
            type="text"
            name="JobOrg"
            id="JobOrg"
            placeholder="Experience Association"
            value={JobOrg}
            onChange={(e) => {
              handleExperienceChange(index, e)
            }}
          />
        </FormGroup>
        <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <Label for="JobStartDate">Start Date</Label>
          <Input
            type="date"
            name="JobStartDate"
            id="JobStartDate"
            value={JobStartDate}
            data-testid="startDate"
            placeholder="date placeholder"
            onChange={(e) => {
              handleExperienceChange(index, e)
            }}
          />
        </FormGroup>
        {currentPosition === true ? (
          <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <Label for="JobStartDate">End Date</Label>
            <Input
              disabled
              type="date"
              name="JobEndDate"
              id="JobEndDate"
              value={JobEndDate}
              data-testid="endDateDisabled"
              placeholder="date placeholder"
            />
          </FormGroup>
        ) : (
          <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <Label for="JobStartDate">End Date</Label>
            <Input
              required
              type="date"
              name="JobEndDate"
              id="JobEndDate"
              value={JobEndDate}
              data-testid="endDate"
              placeholder="date placeholder"
              onChange={(e) => {
                handleExperienceChange(index, e)
              }}
            />
          </FormGroup>
        )}
        <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Label for="JobInfo">Details</Label>
          <Input
            type="textarea"
            name="JobInfo"
            id="JobInfo"
            placeholder="Experience Details"
            value={JobInfo}
            onChange={(e) => {
              handleExperienceChange(index, e)
            }}
          />
        </FormGroup>
        <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
          <Button
            onClick={() => {
              removeExperience(index)
            }}
            style={{ marginTop: '32px' }}
            color="danger"
          >
            Remove Experience
          </Button>
        </FormGroup>
      </Row>
      <hr />
    </div>
  )
})
