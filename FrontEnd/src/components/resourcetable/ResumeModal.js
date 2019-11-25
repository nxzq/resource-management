import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ResumeModal = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <i onClick={toggle} data-toggle="tooltip" data-placement="right" title="Resume" className="table-data far fa-file-alt fa-lg"></i>
            <span className="sr-only">Resume</span>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader className="modalheader" toggle={toggle}>Resume</ModalHeader>
                <ModalBody className="modalbody">               
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="blue-button shadow-none" onClick={toggle}>Download</Button>
                    {' '}
                    <Button color="secondary" className="shadow-none" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ResumeModal;