import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Button, Spinner } from 'reactstrap';
import Header from '../components/Header';
import AboutForm from '../components/forms/AboutForm';
import SummaryForm from '../components/forms/SummaryForm';
import EducationForm from '../components/forms/EducationForm';
import CertificationForm from '../components/forms/CertificationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import ProjectForm from '../components/forms/ProjectForm';
import SkillForm from '../components/forms/SkillForm';
import SectionHeader from '../components/SectionHeader';
import DynamicSectionHeader from '../components/forms/DynamicSectionHeader';

class EditResource extends Component {
    state = {
        data: {
            "Id": "",
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
        },
        EducationForms: [],
        CertificationForms: [],
        ExperienceForms: [],
        ProjectForms: [],
        Loading: true
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`http://localhost:5000/api/resources/${params.id}`)
            .then(res => {
                const resourceData = res.data;
                this.setState({data: resourceData})
                this.state.data.Education.forEach(element => {
                    let index = this.state.EducationForms.length
                    this.setState({
                        EducationForms: [...this.state.EducationForms, <EducationForm key={index} index={index} 
                            removeEducation={this.handleRemoveEducation} School={element.School}
                            Location={element.Location} Degree={element.Degree} Major={element.Major} 
                            Minor={element.Minor} GradDate={element.GradDate} />]
                    })
                })
                this.state.data.Certification.forEach(element => {
                    let index = this.state.CertificationForms.length
                    this.setState({
                        CertificationForms: [...this.state.CertificationForms, <CertificationForm key={index} 
                            index={index} removeCertification={this.handleRemoveCertification} 
                            CertName={element.CertName} CertDate={element.CertDate} CertAssociation={element.CertAssociation} />]
                    })
                })
                this.state.data.Experience.forEach(element => {
                    let index = this.state.ExperienceForms.length
                    this.setState({
                        ExperienceForms: [...this.state.ExperienceForms, <ExperienceForm key={index} 
                            index={index} removeExperience={this.handleRemoveExperience} JobTitle={element.JobTitle} 
                            JobOrg={element.JobTitle} JobStartDate={element.JobStartDate} JobEndDate={element.JobEndDate}
                            JobInfo={element.JobInfo} />]
                    })
                })
                this.state.data.Project.forEach(element => {
                    let index = this.state.ProjectForms.length
                    this.setState({
                        ProjectForms: [...this.state.ProjectForms, <ProjectForm key={index} 
                            index={index} removeProject={this.handleRemoveProject} ProjName={element.ProjName} 
                            ProjDate={element.ProjDate} ProjAssociation={element.ProjAssociation} ProjInfo={element.ProjInfo} />]
                    })
                })
                this.setState({ Loading: false })
            })
        // eslint-disable-next-line
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleAddSkill = (skill) => {
        let data = JSON.parse(JSON.stringify(this.state.data))
        data.Skills = [...this.state.data.Skills, skill]
        this.setState({
            data
        })
    }

    handleRemoveSkill = (skill) => {
        let data = JSON.parse(JSON.stringify(this.state.data))
        data.Skills = this.state.data.Skills.filter(s => s !== skill)
        this.setState({
            data
        })
    }

    handleAddEducation = () => {
        let index = this.state.EducationForms.length
        this.setState({
            EducationForms: [...this.state.EducationForms, <EducationForm key={index} index={index} removeEducation={this.handleRemoveEducation} />]
        })
    }

    handleRemoveEducation = (index) => {
        let form = []
        if (this.state.EducationForms.length === 1 || this.state.EducationForms.length === index) {
            form = [...this.state.EducationForms]
            form.pop()
        }
        else form = [...this.state.EducationForms.slice(0, index), ...this.state.EducationForms.slice(index + 1)]
        this.setState({
            EducationForms: form
        })
    }

    handleAddCertification = () => {
        let index = this.state.CertificationForms.length
        this.setState({
            CertificationForms: [...this.state.CertificationForms, <CertificationForm key={index} index={index} removeCertification={this.handleRemoveCertification} />]
        })
    }

    handleRemoveCertification = (index) => {
        let form = []
        if (this.state.CertificationForms.length === 1 || this.state.CertificationForms.length === index) {
            form = [...this.state.EducationForms]
            form.pop()
        }
        else form = [...this.state.CertificationForms.slice(0, index), ...this.state.CertificationForms.slice(index + 1)]
        this.setState({
            CertificationForms: form
        })
    }

    handleAddExperience = () => {
        let index = this.state.ExperienceForms.length
        this.setState({
            ExperienceForms: [...this.state.ExperienceForms, <ExperienceForm key={index} index={index} removeExperience={this.handleRemoveExperience} />]
        })
    }

    handleRemoveExperience = (index) => {
        let form = []
        if (this.state.ExperienceForms.length === 1 || this.state.ExperienceForms.length === index) {
            form = [...this.state.EducationForms]
            form.pop()
        }
        else form = [...this.state.ExperienceForms.slice(0, index), ...this.state.ExperienceForms.slice(index + 1)]
        this.setState({
            ExperienceForms: form
        })
    }

    handleAddProject = () => {
        let index = this.state.ProjectForms.length
        this.setState({
            ProjectForms: [...this.state.ProjectForms, <ProjectForm key={index} index={index} removeProject={this.handleRemoveProject} />]
        })
    }

    handleRemoveProject = (index) => {
        let form = []
        if (this.state.ProjectForms.length === 1 || this.state.ProjectForms.length === index) {
            form = [...this.state.EducationForms]
            form.pop()
        }
        else form = [...this.state.ProjectForms.slice(0, index), ...this.state.ProjectForms.slice(index + 1)]
        this.setState({
            ProjectForms: form
        })
    }

    render() {
        return (
            <div>
                <Header name={'Edit Resource Form'} />
                {this.state.Loading ? <div className="text-center"><Spinner color="primary" /></div> :
                <Container className="ResourceForm">
                    <Form onSubmit={this.handleSubmit}>
                        <SectionHeader name="About" />
                        <AboutForm FirstName={this.state.data.FirstName} LastName={this.state.data.LastName} Role={this.state.data.Role}
                            Email={this.state.data.Email} Phone={this.state.data.Phone} LinkedIn={this.state.data.LinkedIn} 
                            GitHub={this.state.data.GitHub} PersonalSite={this.state.data.PersonalSite} />
                        <SectionHeader name="Summary" />
                        <SummaryForm SummaryText={this.state.data.SummaryText} />
                        <DynamicSectionHeader name="Education" count={this.state.EducationForms.length} addForm={this.handleAddEducation} />
                        {this.state.EducationForms}
                        <DynamicSectionHeader name="Certifications" count={this.state.CertificationForms.length} addForm={this.handleAddCertification} />
                        {this.state.CertificationForms}
                        <DynamicSectionHeader name="Experience" count={this.state.ExperienceForms.length} addForm={this.handleAddExperience} />
                        {this.state.ExperienceForms}
                        <DynamicSectionHeader name="Projects" count={this.state.ProjectForms.length} addForm={this.handleAddProject} />
                        {this.state.ProjectForms}
                        <SectionHeader name="Skills" />
                        <SkillForm skills={this.state.data.Skills} addSkill={this.handleAddSkill} removeSkill={this.handleRemoveSkill} />
                        <Button type="submit" className="col-md-12" color="primary">Submit Form</Button>
                    </Form>
                </Container>
                }
            </div>
        );
    }
}

export default EditResource;