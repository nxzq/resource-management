import React, { useState } from 'react';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';
import Skill from './Skills';

const SkillForm = ({ skills, addSkill, removeSkill }) => {
    const [skill, setSkill] = useState('')
    const handleChange = (e) => {
        setSkill(e.target.value)
    }
    // Added an event handler for hitting enter to add a new skill to the filter.
    const handleKeyPress = e => {
        if (e.key === "Enter"){
            handleAddSkill(e)
            // TO-DO: add some logic to see if the "Skill Level" selector has a value.
            // IF they hit enter and one isn't selected yet
            // THEN should there be a warning to select a skill level?
        }
    }
    const handleAddSkill = (e) => {
        e.preventDefault()
        if (skill === '') return
        else {
            addSkill(skill)
            setSkill('')
        }
    }
    
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <Label for="lastName">Skill</Label>
                    <Input onChange={handleChange} onKeyPress={handleKeyPress} type="text" name="lastName" id="LastName" placeholder="Skill Name" value={skill} />
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
                    <Button color="primary" onClick={handleAddSkill} id="add-skill" className="shadow-none" style={{ marginTop: '32px' }}>
                        <i style={{color: 'inherit'}} className="fas fa-plus-circle fa-lg"></i>&nbsp;&nbsp;Add Skill</Button>
                </FormGroup>
            </Row>
            <Skill skills={skills} removeSkill={removeSkill} />
            <hr />
        </div>
    )
}

export default SkillForm;