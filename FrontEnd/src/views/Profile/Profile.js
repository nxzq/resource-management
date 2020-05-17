import React, { useState, useEffect } from 'react'
import axios from '../../api/index'
import { Container, Row, Tooltip, Spinner, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header/Header'
import SectionHeader from '../../components/layout/SectionHeader/SectionHeader'

export default React.memo(function Profile(props) {

  const [ id ] = useState(props.match.params.id)
  const [ tooltipOpen, setTooltipOpen ] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)
  const [ resource, setResource ] = useState(
    {
      'Id': null,
      'FirstName': '',
      'LastName': '',
      'Role': '',
      'Email': '',
      'Phone': '',
      'LinkedIn': '',
      'GitHub': '',
      'PersonalSite': '',
      'SummaryText': '',
      'Education': [],
      'Experience': [],
      'Project': [],
      'Certification': [],
      'Skills': []
    }
  )

  useEffect(() => {
    const { match: { params } } = props
    axios.get(`resources/${params.id}`)
      .then(res => {
        const resourceData = res.data
        setResource(resourceData)
      })
      .catch(error => {
        console.log(error)
      }) // eslint-disable-next-line
    }, [])

  const Education = () => {
    let Education = []
    let width = resource.Education.length > 2 ? 4 : 6
    for (let i = 0; i < resource.Education.length; i++) {
      Education = [ ...Education,
        <div key={Education.length} className={'col-md-' + width}>
          <p><b>School/University:</b>&nbsp;{resource.Education[i].School}</p>
          <p><b>Location:</b>&nbsp;{resource.Education[i].Location}</p>
          <p><b>Graduation Date:</b>&nbsp;{resource.Education[i].GradDate}</p>
          <p><b>Degree:</b>&nbsp;{resource.Education[i].Degree}</p>
          <p><b>Major:</b>&nbsp;{resource.Education[i].Major}</p>
          {resource.Education[i].Minor[0] ?
            <p>
              <b>Minor:</b>&nbsp;{resource.Education[i].Minor}
            </p> : null}
        </div>
      ]
    }
    return resource.Education.length === 0 ? <div className="col-md-12"><p>None</p></div> : Education
  }

  const Experience = () => {
    let Experience = []
    let width = resource.Experience.length > 2 ? 4 : 6
    for (let i = 0; i < resource.Experience.length; i++) {
      Experience = [ ...Experience,
        <div key={Experience.length} className={'col-md-' + width}>
          <p><b>Job Title:</b>&nbsp;{resource.Experience[i].JobTitle}</p>
          <p><b>Job Company/Organization:</b>&nbsp;{resource.Experience[i].JobOrg}</p>
          <p><b>Start Date:</b>&nbsp;{resource.Experience[i].JobStartDate}</p>
          {resource.Experience[i].JobEndDate === '' ?
            <p><b>End Date:</b>&nbsp;Present</p>
            :
            <p><b>End Date:</b>&nbsp;{resource.Experience[i].JobEndDate}</p>
          }
          {resource.Experience[i].JobInfo === '' ?
            <p><b>Details:</b>&nbsp;None</p>
            :
            <p><b>Details:</b>&nbsp;{resource.Experience[i].JobInfo}</p>
          }
        </div>
      ]
    }
    return resource.Experience.length === 0 ? <div className="col-md-12"><p>None</p></div> : Experience
  }

  const Project = () => {
    let Project = []
    let width = resource.Project.length > 2 ? 4 : 6
    for (let i = 0; i < resource.Project.length; i++) {
      Project = [ ...Project,
        <div key={Project.length} className={'col-md-' + width}>
          <p><b>Project Name:</b>&nbsp;{resource.Project[i].ProjName}</p>
          <p><b>Project Association:</b>&nbsp;{resource.Project[i].ProjAssociation}</p>
          <p><b>Project Date:</b>&nbsp;{resource.Project[i].ProjDate}</p>
          {resource.Project[i].ProjInfo === '' ?
            <p><b>Details:</b>&nbsp;None</p>
            :
            <p><b>Details:</b>&nbsp;{resource.Project[i].ProjInfo}</p>
          }
        </div>
      ]
    }
    return resource.Project.length === 0 ? <div className="col-md-12"><p>None</p></div> : Project
  }

  const Certification = () => {
    let Certification = []
    let width = resource.Certification.length > 2 ? 4 : 6
    for (let i = 0; i < resource.Certification.length; i++) {
      Certification = [ ...Certification,
        <div key={Certification.length} className={'col-md-' + width}>
          <p><b>Certification Name:</b>&nbsp;{resource.Certification[i].CertName}</p>
          <p><b>Certification Association:</b>&nbsp;{resource.Certification[i].CertAssociation}</p>
          <p><b>Certification Date:</b>&nbsp;{resource.Certification[i].CertDate}</p>
        </div>
      ]
    }
    return resource.Certification.length === 0 ? <div className="col-md-12"><p>None</p></div> : Certification
  }

  const Skills = () => {
    let skillList = resource.Skills.sort((a, b) => a.toLowerCase() !== b.toLowerCase() ? a.toLowerCase() > b.toLowerCase() ? 1 : -1 : 0)
    return resource.Skills.length === 0 ? <div className="col-md-12"><p>None</p></div> :
      <div className="col-md-12"><p><b>Skills:</b>&nbsp;{skillList.join(', ')}</p></div>
  }

  return (
    <div>
      {resource.Id === null ? <div className="text-center"><Spinner color="primary" /></div> :
        <div>
          <Header name={
            <div>
              {resource.FirstName}&nbsp;{resource.LastName}&nbsp;&nbsp;
              <Link style={{ textDecoration: 'none' }} to={'/editresource/' + id}>
                <i id="edit" className="fas fa-edit"></i>
              </Link>
              <Tooltip placement="right" isOpen={tooltipOpen} target="edit" toggle={toggle}>
                                Edit Profile
              </Tooltip>
            </div>
          } />
          <Container>
            <Row>
              <p className="col-md-6">
                <b>Role:</b>&nbsp;{resource.Role}
              </p>
              <p className="col-md-6">
                <b>Email:</b>&nbsp;<a style={{ textDecoration: 'none' }} className="profileLink" href='mailto: {resource.Email}'>{resource.Email}</a>
              </p>
              <p className="col-md-6">
                <b>Phone:</b>&nbsp;{resource.Phone.length === 10 ?
                  `(${resource.Phone.substring(0, resource.Phone.length - 7)})-${resource.Phone.substring(resource.Phone.length - 7, resource.Phone.length - 4)}-${resource.Phone.substring(resource.Phone.length - 4, resource.Phone.length)}`
                  : `+${resource.Phone.substring(0, resource.Phone.length - 10)} (${resource.Phone.substring(resource.Phone.length - 10, resource.Phone.length - 7)})-${resource.Phone.substring(resource.Phone.length - 7, resource.Phone.length - 4)}-${resource.Phone.substring(resource.Phone.length - 4, resource.Phone.length)}`
                }
              </p>
              {resource.LinkedIn !== '' ?
                <p className="col-md-6">
                  <b>LinkedIn:</b>&nbsp;<a className="profileLink" href={resource.LinkedIn} target="_blank" rel="noopener noreferrer">{resource.LinkedIn}</a>
                </p> : null}
              {resource.GitHub !== '' ?
                <p className="col-md-6">
                  <b>GitHub:</b>&nbsp;<a className="profileLink" href={resource.GitHub} target="_blank" rel="noopener noreferrer">{resource.GitHub}</a>
                </p> : null}
              {resource.PersonalSite !== '' ?
                <p className="col-md-6">
                  <b>Personal Site:</b>&nbsp;<a className="profileLink" href={resource.PersonalSite} target="_blank" rel="noopener noreferrer">{resource.PersonalSite}</a>
                </p> : null}
              {resource.SummaryText !== '' ?
                <p className="col-md-12">
                  <b>Summary:</b>&nbsp;{resource.SummaryText}
                </p> : null}
            </Row>
            <br />
            <Row>
              <SectionHeader name={'Education'} />
            </Row>
            <Row>
              {Education()}
            </Row>
            <br />
            <Row>
              <SectionHeader name={'Experience'} />
            </Row>
            <Row>
              {Experience()}
            </Row>
            <br />
            <Row>
              <SectionHeader name={'Projects'} />
            </Row>
            <Row>
              {Project()}
            </Row>
            <br />
            <Row>
              <SectionHeader name={'Certifications'} />
            </Row>
            <Row>
              {Certification()}
            </Row>
            <br />
            <Row>
              <SectionHeader name={'Skills'} />
            </Row>
            <Row>
              {Skills()}
            </Row>
            <Row>
              <Link className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right" style={{ textDecoration: 'none' }} to="/resources">
                <Button style={{ height: '50px', textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} className="blue-button shadow-none" color="primary">Return To Resources</Button>
              </Link>
            </Row>
          </Container>
        </div>
      }
    </div>
  )
})