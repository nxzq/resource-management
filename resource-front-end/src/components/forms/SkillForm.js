import React, { useState } from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';
import Skill from './Skills';

const SkillForm = ({skills, addSkill, removeSkill}) => {
    const [skill, setSkill] = useState ('')
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
                <FormGroup className="col-xl-4 col-lg-4 col-md-4 col-sm-9 col-xs-9">
                    <Label for="skillType">Skill Type</Label>
                    <Input type="select" name="skillType" id="skillType" placeholder="Select" >
                        <option>Language</option>
                        <option>Framework</option>
                        <option>Library</option>
                        <option>Technology</option>
                        <option>Software</option>
                        <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3">
                <Button onClick={handleAddSkill} style={{position: 'absolute', bottom: 0}}>+ Add Skill</Button>
                </FormGroup>
            </Row>
            <Skill skills={skills} removeSkill={removeSkill} />
            <hr />
        </div>
    )
}

export default SkillForm;