import React, { Component } from 'react';
import { Container, Form, Button } from 'reactstrap';
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

class AddResource extends Component {
    state = {
        skills: ['React.js', 'Python'],
        EducationForms: [],
        CertificationForms: [],
        ExperienceForms: [],
        ProjectForms: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleAddSkill = (skill) => {
        this.setState({
            skills: [...this.state.skills, skill]
        })
    }

    handleRemoveSkill = (skill) => {
        let skills = this.state.skills.filter(s => s !== skill)
        this.setState({
            skills: skills
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
                <Header name={'Resource Skills Form'} />
                <Container className="ResourceForm">
                    <Form onSubmit={this.handleSubmit}>
                        <SectionHeader name="About" />
                        <AboutForm />
                        <SectionHeader name="Summary" />
                        <SummaryForm />
                        <DynamicSectionHeader name="Education" count={this.state.EducationForms.length} addForm={this.handleAddEducation} />
                        {this.state.EducationForms}
                        <DynamicSectionHeader name="Certifications" count={this.state.CertificationForms.length} addForm={this.handleAddCertification} />
                        {this.state.CertificationForms}
                        <DynamicSectionHeader name="Experience" count={this.state.ExperienceForms.length} addForm={this.handleAddExperience} />
                        {this.state.ExperienceForms}
                        <DynamicSectionHeader name="Projects" count={this.state.ProjectForms.length} addForm={this.handleAddProject} />
                        {this.state.ProjectForms}
                        <SectionHeader name="Skills" />
                        <SkillForm skills={this.state.skills} addSkill={this.handleAddSkill} removeSkill={this.handleRemoveSkill} />
                        <Button type="submit" className="col-md-12" color="primary">Submit Form</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default AddResource;