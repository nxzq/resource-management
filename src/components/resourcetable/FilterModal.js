import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Input } from 'reactstrap';
import NeededSkill from './NeededSkill';

const FilterModal = ({ skills }) => {
    const [neededSkills, setNeededSkill] = useState([])
    const [skill, setSkill] = useState('')
    
    const handleChange = (e) => {
        setSkill(e.target.value)
    }
    const handleAddSkill = (e) => {
        e.preventDefault()
        let added = neededSkills
        added.push(skill)
        setNeededSkill(added)
        setSkill('')
    }
    const handleRemoveSkill = (skill) => {
        let remove = neededSkills.filter(s => s !== skill)
        setNeededSkill(remove)
    }
    const handleFilter = (e) => {
        e.preventDefault()
        // Set props.skills = neededSkills
        toggle()
    }
    const handleCancel = (e) => {
        e.preventDefault()
        setNeededSkill([])
        toggle()
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button style={{ height: '50px' }} onClick={toggle} className="shadow-none" type="button"><i className="fas fa-filter"></i>&nbsp;&nbsp;Filter</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Filter Based on Skills</ModalHeader>
                <ModalBody>
                    <Row>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
                            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4" style={{}}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                                    </div>
                                    <Input onChange={handleChange} value={skill} type="search" id="myInput" placeholder="Search for Skill" aria-describedby="button-addon2" className="form-control border-0 bg-light" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <Button onClick={handleAddSkill} className="shadow-none" style={{ color: '#007bff', backgroundColor: 'white', borderColor: 'white', marginTop: '5px'}}><i className="fas fa-plus-circle fa-lg"></i> Add</Button>
                        </div>
                    </Row>
                    <NeededSkill skills={neededSkills} removeSkill={handleRemoveSkill} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="shadow-none" onClick={handleFilter}>Filter</Button>{' '}
                    <Button color="secondary" className="shadow-none" onClick={handleCancel}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default FilterModal;