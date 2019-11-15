import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Tooltip, Spinner } from 'reactstrap';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';

const Profile = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const [resource, setResource] = useState(
        {
            "Id": null,
            "FirstName": "",
            "LastName": "",
            "Role": "",
            "Email": "",
            "Phone": "",
            "LinkedIn": "",
            "GitHub": "",
            "PersonalSite": "",
            "SummaryText": "",
            "Education": [],
            "Experience": [],
            "Project": [],
            "Certification": [],
            "Skills": []
        }
    )

    useEffect(() => {
        try {
        axios.get('http://localhost:5000/api/resources/' + props.location.value.id)
          .then(res => {
            const resourceData = res.data;
            setResource( resourceData )
          })
      } catch {}}, [])

    const Education = () => {
        let Education = []
        let width = resource.Education.length > 2 ? 4 : 6
        for (let i=0; i<resource.Education.length; i++) {
            Education = [...Education, 
            <div className={"col-md-"+ width}>
                <p><b>School/University:</b>&nbsp;{resource.Education[i].School}</p>
                <p><b>Location:</b>&nbsp;{resource.Education[i].Location}</p>
                <p><b>Graduation Date:</b>&nbsp;{resource.Education[i].GradDate}</p>
                <p><b>Degree:</b>&nbsp;{resource.Education[i].Degree}</p>
                <p><b>Major:</b>&nbsp;{resource.Education[i].Major}</p>
                {resource.Education[i].Minor[0] ? 
                    <p>
                        <b>Minor:</b>&nbsp;{resource.Education[i].Minor}
                    </p> : ''}
                {resource.Education[i].GPA !== '' ? 
                <p>
                    <b>GPA:</b>&nbsp;{resource.Education[i].GPA}
                </p> : ''}
            </div>
        ]
        }
        return resource.Education.length === 0 ? <div className="col-md-12"><p>None</p></div> : Education
    }

    const Experience = () => {
        let Experience = []
        let width = resource.Experience.length > 2 ? 4 : 6
        for (let i=0; i<resource.Experience.length; i++) {
            Experience = [...Experience, 
            <div className={"col-md-"+ width}>
                <p><b>Job Title:</b>&nbsp;{resource.Experience[i].JobTitle}</p>
                <p><b>Job Company/Organization:</b>&nbsp;{resource.Experience[i].JobOrg}</p>
                <p><b>Start Date:</b>&nbsp;{resource.Experience[i].JobStartDate}</p>
                {resource.Experience[i].JobEndDate === '' ? 
                    <p><b>End Date:</b>&nbsp;Present</p>
                    : 
                    <p><b>End Date:</b>&nbsp;{resource.Experience[i].JobEndDate}</p>
                }
                <p><b>Details:</b>&nbsp;{resource.Experience[i].JobInfo}</p>
            </div>
        ]
        }
        return resource.Experience.length === 0 ? <div className="col-md-12"><p>None</p></div> : Experience
    }

    const Project = () => {
        let Project = []
        let width = resource.Project.length > 2 ? 4 : 6
        for (let i=0; i<resource.Project.length; i++) {
            Project = [...Project, 
            <div className={"col-md-"+ width}>
                <p><b>Project Name:</b>&nbsp;{resource.Project[i].ProjName}</p>
                <p><b>Project Association:</b>&nbsp;{resource.Project[i].ProjAssociation}</p>
                <p><b>Project Date:</b>&nbsp;{resource.Project[i].ProjDate}</p>
                <p><b>Details:</b>&nbsp;{resource.Project[i].ProjInfo}</p>
            </div>
        ]
        }
        return resource.Project.length === 0 ? <div className="col-md-12"><p>None</p></div> : Project
    }

    const Certification = () => {
        let Certification = []
        let width = resource.Certification.length > 2 ? 4 : 6
        for (let i=0; i<resource.Certification.length; i++) {
            Certification = [...Certification, 
            <div className={"col-md-"+ width}>
                <p><b>Certification Name:</b>&nbsp;{resource.Certification[i].CertName}</p>
                <p><b>Certification Association:</b>&nbsp;{resource.Certification[i].CertAssociation}</p>
                <p><b>Certification Date:</b>&nbsp;{resource.Certification[i].CertDate}</p>
            </div>
        ]
        }
        return resource.Certification.length === 0 ? <div className="col-md-12"><p>None</p></div> : Certification
    }

    const Skills = () => {
        let skillList = resource.Skills.sort((a ,b) => a.toLowerCase() !== b.toLowerCase() ? a.toLowerCase() > b.toLowerCase() ? 1 : -1 : 0)
        return resource.Skills.length === 0 ? <div className="col-md-12"><p>None</p></div> : 
        <div className="col-md-12"><p><b>Skills:</b>&nbsp;{skillList.join(', ')}</p></div>
    }

    return (
        <div>
            {console.log(resource)}
            {console.log(resource.Id)}
            { resource.Id === null ? <div className="text-center"><Spinner color="primary" /></div> :
            <div>
                <Header name={
                    <div>
                    {resource.FirstName}&nbsp;{resource.LastName}&nbsp;&nbsp;<i id="edit" className="fas fa-edit"></i>
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
                            <b>Email:</b>&nbsp;{resource.Email}
                        </p>
                        <p className="col-md-6">
                            <b>Phone:</b>&nbsp;{resource.Phone}
                        </p>
                        {resource.LinkedIn !== '' ? 
                        <p className="col-md-6">
                            <b>LinkedIn:</b>&nbsp;{resource.LinkedIn}
                        </p> : ''}
                        {resource.GitHub !== '' ? 
                        <p className="col-md-6">
                            <b>GitHub:</b>&nbsp;{resource.GitHub}
                        </p> : ''}
                        {resource.PersonalSite !== '' ? 
                        <p className="col-md-6">
                            <b>Personal Site:</b>&nbsp;{resource.PersonalSite}
                        </p> : ''}
                        {resource.SummaryText !== '' ? 
                        <p className="col-md-12">
                            <b>Summary:</b>&nbsp;{resource.SummaryText}
                        </p> : ''}
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
                </Container> 
            </div>
            }
        </div>
    );
}

export default Profile;