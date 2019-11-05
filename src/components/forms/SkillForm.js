import React, { useState } from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';
import Skill from './Skills';

const SkillForm = ({ skills, addSkill, removeSkill }) => {
    const [skill, setSkill] = useState('')
    const handleChange = (e) => {
        setSkill(e.target.value)
    }
    const handleAddSkill = (e) => {
        e.preventDefault()
        addSkill(skill)
        setSkill('')
    }
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="lastName">Skill</Label>
                    <Input onChange={handleChange} type="text" name="lastName" id="LastName" placeholder="Skill Name" value={skill} />
                </FormGroup>
                <FormGroup className="col-xl-4 col-lg-4 col-md-3 col-sm-6 col-xs-6">
                    <Label for="skillType">Skill Level</Label>
                    <Input type="select" name="skillType" id="skillType" >
                        <option value='' selected disabled>Please select</option>
                        <option>Proficient</option>
                        <option>Intermediate</option>
                        <option>Novice</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6">
                    <Button onClick={handleAddSkill} className="shadow-none" style={{ color: '#007bff', backgroundColor: 'white', borderColor: 'white', marginTop: '32px' }}><i className="fas fa-plus-circle fa-lg"></i> Add Skill</Button>
                </FormGroup>
            </Row>
            <Skill skills={skills} removeSkill={removeSkill} />
            <hr />
        </div>
    )
}

export default SkillForm;