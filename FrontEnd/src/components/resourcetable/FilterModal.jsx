import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, FormGroup } from 'reactstrap';

const FilterModal = ({ toggleSkillMatch, hideSkillMatch, notHidden, neededSkills, setNeededSkill }) => {

    const [availSkills, setAvailSkills] = useState()
    const [skillFilter, setSkillFilter] = useState([...neededSkills])
    const [selectedSkills, setSelectedSkills] = useState(neededSkills.map(s => ({ label: s, value: s })))

    useEffect(() => {
        axios.get(`http://localhost:5000/api/skills`)
          .then(res => {
            const resourceData = res.data.Skills.map(s => ({ label: s, value: s }))
            setAvailSkills(resourceData)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const handleChange = selectedOption => {
        if (selectedOption !== undefined && selectedOption !== null) {
            let skills = selectedOption.map(s => s.value)
            setSkillFilter([...skills])
            setSelectedSkills(selectedOption)
        } else {
            setSkillFilter([])
            setSelectedSkills([])
        }
    };
    const handleFilter = (e) => {
        e.preventDefault()
        if (skillFilter.length === 0) {
            setNeededSkill(skillFilter)
            hideSkillMatch()
            toggle()
        }
        else if (notHidden === true) {
            setNeededSkill(skillFilter)
            toggle()
        }
        else {
            setNeededSkill(skillFilter)
            toggleSkillMatch()
            toggle()
        }
    }
    const handleCancel = (e) => {
        e.preventDefault()
        if (notHidden === true) {
            hideSkillMatch()
            setNeededSkill([])
            setSkillFilter([])
            setSelectedSkills([])
            toggle()
        } else {
            setNeededSkill([])
            setSkillFilter([])
            setSelectedSkills([])
            toggle()
        }
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={{ height: '50px', textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} onClick={toggle} className="btn-block shadow-none" type="button"><i className="fas fa-filter"></i>&nbsp;&nbsp;Filter</Button>
            <Modal isOpen={modal} toggle={toggle} autoFocus={false}>
                <ModalHeader className="modalheader" toggle={toggle}>Filter Based on Skills</ModalHeader>
                <ModalBody className="modalbody">
                    <Row>
                        <FormGroup className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label className="sr-only">Skills:</label>
                            <Select autoFocus={true} id="select-search" isMulti options={availSkills} onChange={handleChange} value={selectedSkills} />
                        </FormGroup>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="blue-button shadow-none" onClick={handleFilter}>Filter</Button>{' '}
                    <Button color="secondary" className="shadow-none" onClick={handleCancel}>Remove Filter</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default FilterModal;