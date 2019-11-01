import React, { Component } from 'react';
import { Container, Form, Button } from 'reactstrap';
import AboutForm from './forms/AboutForm';
import SummaryForm from './forms/SummaryForm';
import EducationForm from './forms/EducationForm';
import CertificationForm from './forms/CertificationForm';
import ExperienceForm from './forms/ExperienceForm';
import ProjectForm from './forms/ProjectForm';
import SkillForm from './forms/SkillForm';
import SectionHeader from './forms/SectionHeader';
import DynamicSectionHeader from './forms/DynamicSectionHeader';

class ResourceForm extends Component {
    state = {
        skills: ['React.js', 'Python']
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleRemoveSkill = (skill) => {
        let skills = this.state.skills.filter(s => s !== skill)
        this.setState({
            skills: skills
        })
    }

    handleAddSkill = (skill) => {
        this.setState({
            skills: [...this.state.skills, skill]
        })
    }

    render() {
        return (
            <Container className="ResourceForm">
                <h1 style={{ textAlign: 'center' }}>Resource Skills Form</h1>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                    <SectionHeader name="About" />
                    <AboutForm />
                    <SectionHeader name="Summary" />
                    <SummaryForm />
                    <DynamicSectionHeader name="Education" />
                    <EducationForm />
                    <DynamicSectionHeader name="Certifications" />
                    <CertificationForm />
                    <DynamicSectionHeader name="Experience" />
                    <ExperienceForm />
                    <DynamicSectionHeader name="Projects" />
                    <ProjectForm />
                    <SectionHeader name="Skills" />
                    <SkillForm skills={this.state.skills} addSkill={this.handleAddSkill} removeSkill={this.handleRemoveSkill} />
                        <Button type="submit" className="col-md-12" color="primary">Submit Form</Button>
                </Form>
            </Container>
                );
            }
        }
        
export default ResourceForm;