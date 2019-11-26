import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Label, Input, FormGroup, Row, Button } from 'reactstrap';
import Skill from './Skills';

const SkillForm = ({ skills, addSkill, removeSkill }) => {

    const [skill, setSkill] = useState([])
    const [availSkills, setAvailSkills] = useState()
    const [selectedSkills, setSelectedSkills] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/skills`)
          .then(res => {
            const resourceData = res.data.Skills.map(s => ({ label: s, value: s }))
            setAvailSkills(resourceData)
          })
      }, [])

    const handleChange = selectedOption => {
        setSelectedSkills(selectedOption)
        let skills = selectedOption.map(s => s.value)
        console.log(selectedOption)
        console.log(skills)
      };

    // const handleChange = (e) => {
    //     setSkill(e.target.value)
    // }

    // const handleKeyPress = e => {
    //     if (e.key === "Enter"){
    //         handleAddSkill(e)
    //     }
    // }
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
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Label for="skill">Skill</Label>
                    <Select isMulti options={availSkills} onChange={handleChange} value={selectedSkills} />
                    {/* <Input onChange={handleChange} onKeyPress={handleKeyPress} type="text" name="skill" id="skill" placeholder="Skill Name" value={skill} /> */}
                </FormGroup>
                {/* <FormGroup className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block" /> */}
                {/* <FormGroup className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <Button color="primary" onClick={handleAddSkill} id="add-skill" className="shadow-none" style={{ marginTop: '32px' }}>
                        <i style={{color: 'inherit'}} className="fas fa-plus-square fa-lg"></i>&nbsp;&nbsp;Add Skill</Button>
                </FormGroup> */}
            </Row>
            {/* <Skill skills={skills} removeSkill={removeSkill} /> */}
            <hr />
        </div>
    )
}

export default SkillForm;