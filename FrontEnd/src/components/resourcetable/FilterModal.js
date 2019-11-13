import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input } from 'reactstrap';
import NeededSkill from './NeededSkill';

const FilterModal = ({ toggleSkillMatch, hideSkillMatch, notHidden, neededSkills, setNeededSkill }) => {

    const [skill, setSkill] = useState('')
    const [skillFilter, setSkillFilter] = useState([...neededSkills])

    const handleChange = (e) => {
        setSkill(e.target.value)
    }
    // Added an event handler for hitting enter to add a new skill to the filter.
    const handleKeyPress = e => {
        if (e.key === "Enter") handleAddSkill(e)
    }
    const handleAddSkill = (e) => {
        e.preventDefault()
        if (skill === '') return
        else {
            setSkillFilter([...skillFilter, skill])
            setSkill('')
        }
    }
    const handleRemoveSkill = (skill) => {
        let remove = skillFilter.filter(s => s !== skill)
        setSkillFilter(remove)
    }
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
            toggle()
        } else {
            setNeededSkill([])
            toggle()
        }
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={{ height: '50px', textDecoration: 'none' }} onClick={toggle} className="btn-block shadow-none" type="button"><i className="fas fa-filter"></i>&nbsp;&nbsp;Filter</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="modalheader" toggle={toggle}>Filter Based on Skills</ModalHeader>
                <ModalBody className="modalbody">
                    <Row>
                        <div className="rounded-input col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i style={{color: '#007bff'}} className="fa fa-search"></i></button>
                                    </div>
                                    <Input onChange={handleChange} onKeyPress={handleKeyPress} style={{ marginRight: '15px', marginLeft: '15px' }} value={skill} type="search" id="myInput" placeholder="Search for Skill" aria-describedby="button-addon2" className="form-control border-0 bg-light" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <Button onClick={handleAddSkill} id="add-skill" className="shadow-none" style={{ marginTop: '5px' }}>
                                <i style={{color: 'inherit'}} className="fas fa-plus-circle fa-lg"></i>&nbsp;&nbsp;Add</Button>
                        </div>
                    </Row>
                    <NeededSkill skills={skillFilter} removeSkill={handleRemoveSkill} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="shadow-none" onClick={handleFilter}>Filter</Button>{' '}
                    <Button color="secondary" className="shadow-none" onClick={handleCancel}>Remove Filter</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default FilterModal;