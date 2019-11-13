import React, { useState } from 'react';
import { Container, Row, Tooltip } from 'reactstrap';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SectionHeader from '../components/forms/SectionHeader';

const Profile = ({person}) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const [resource] = useState(
        {
            "FirstName": "Sam",
            "LastName": "Hyderbell",
            "Role": "Jr. Software Developer",
            "Email": "sam.hyderbell@email.com",
            "Phone": "(424) 218-4950",
            "LinkedIn": "https://www.linkedin.com/in/hydersam",
            "GitHub": "https://github.com/hydersam",
            "PersonalSite": "www.googlehydersam.com",
            "SummaryText": "Hey many name is Sam, and I'm a Junior Software Developer",
            "Education": [
                {
                    "School": "University of Northern Iowa",
                    "Location": "Cedar Falls, Iowa",
                    "GradDate": "2019",
                    "Degree": "Bachelor",
                    "Major": [
                        "Computer Science"
                    ],
                    "Minor": [
                        ""
                    ],
                    "GPA": ""
                }, {
                    "School": "University of Northern Iowa",
                    "Location": "Cedar Falls, Iowa",
                    "GradDate": "2019",
                    "Degree": "Bachelor",
                    "Major": [
                        "Computer Science"
                    ],
                    "Minor": [
                        "Art"
                    ],
                    "GPA": "3.32"
                }
            ],
            "Experience": [
                {
                    "JobTitle": "Junior Software Developer",
                    "JobOrg": "Yash Technologies",
                    "JobStartDate": "August 2017",
                    "JobEndDate": "October 2018",
                    "JobInfo": "Worked closely with onshore and offshore team to achieve quality and performance goals. \n"
                    + "Pulled from Graduated Training Program to work on a .NET team."
                }
            ],
            "Project": [
                {
                    "ProjName": "Azure Cloud Migration",
                    "ProjDate": "2019",
                    "ProjAssociation": "Yash Technologies",
                    "ProjInfo": "Designed solutions with CI/CD pipelines in order to automate processes for users to create, build, and deploy products through the cloud with little interaction needed. \n"
                    + "Automated creation and queuing of build pipelines using Powershell and Azure Rest API. \n"
                    + "Created Azure resources through Azure ARM template configurations."
                }
            ],
            "Certification": [],
            "Skill": [
                {
                    "Languages": [
                        "JavaScript",
                        "Python",
                        "Go",
                        "PHP",
                        "C#"
                    ],
                    "Frameworks": [
                        ".NET Framework"
                    ],
                    "WebTechnologies": [
                        "HTML",
                        "CSS",
                        "jQuery",
                        "Node.js"
                    ],
                    "DatabaseTech": [
                        "MySQL",
                        "PostgreSQL",
                        "CosmosDB"
                    ],
                    "Cloud": [
                        "AWS",
                        "Azure"
                    ],
                    "DevOps": [
                        "Jenkins",
                        "Azure Functions",
                        "Azure Key Vault",
                        "Kubernetes"
                    ]
                }
            ]
        }
    )

    const Education = () => {
        let Education = []
        for (let i=0; i<resource.Education.length; i++) {
            Education = [...Education, 
            <div className="col-md-6">
                <p><b>School/University:</b>&nbsp;{resource.Education[i].School}</p>
                <p><b>Location:</b>&nbsp;{resource.Education[i].Location}</p>
                <p><b>Graduation Date:</b>&nbsp;{resource.Education[i].GradDate}</p>
                <p><b>Degree:</b>&nbsp;{resource.Education[i].Degree}</p>
                <p><b>Major:</b>&nbsp;{resource.Education[i].Major}</p>
                {resource.Education[i].Minor[0] !== '' ? 
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
        for (let i=0; i<resource.Experience.length; i++) {
            Experience = [...Experience, 
            <div className="col-md-6">
                <p><b>Job Title:</b>&nbsp;{resource.Experience[i].JobTitle}</p>
                <p><b>Job Company/Organization:</b>&nbsp;{resource.Experience[i].JobOrg}</p>
                <p><b>Start Date:</b>&nbsp;{resource.Experience[i].JobStartDate}</p>
                {resource.Education[i].GPA !== '' ? 
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
        for (let i=0; i<resource.Project.length; i++) {
            Project = [...Project, 
            <div className="col-md-6">
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
        for (let i=0; i<resource.Certification.length; i++) {
            Certification = [...Certification, 
            <div className="col-md-6">
                <p><b>Certification Name:</b>&nbsp;{resource.Certification[i].CertName}</p>
                <p><b>Certification Association:</b>&nbsp;{resource.Certification[i].CertAssociation}</p>
                <p><b>Certification Date:</b>&nbsp;{resource.Certification[i].CertDate}</p>
            </div>
        ]
        }
        return resource.Certification.length === 0 ? <div className="col-md-12"><p>None</p></div> : Certification
    }

    return (
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
                    <p>skills...</p>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;