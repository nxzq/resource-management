import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Label, FormGroup, Row } from 'reactstrap';

export default function SkillForm({ skills, handleSkillsChange, test }) {

    const [availSkills, setAvailSkills] = useState()
    const [selectedSkills, setSelectedSkills] = useState(skills !== undefined ? skills.map(s => ({ label: s, value: s })) : '' )

    useEffect(() => {
        axios.get(`http://localhost:5000/api/skills`)
          .then(res => {
            const resourceData = res.data.Skills.map(s => ({ label: s, value: s }))
            setAvailSkills(resourceData)
          })
      }, [])

    const handleChange = (selectedOption) => {
        if (selectedOption !== undefined && selectedOption !== null) {
            setSelectedSkills([...selectedOption])
            updateSkills(selectedOption)
        }
        if (selectedOption === null) {
            setSelectedSkills()
            updateSkills(selectedOption)
        }
    };

    const updateSkills = (skills) => handleSkillsChange(skills ? skills.map(s => s.value) : [])
    
    return (
        <div>
            <Row>
                <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Label for="skillsSelect">Skills</Label>
                    <Select isMulti id="select-search" options={availSkills} name="skillsSelect" onChange={handleChange} value={selectedSkills} />
                </FormGroup>
            </Row>
            <hr />
        </div>
    )
};