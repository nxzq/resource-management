import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HoverToolTip from '../HoverToolTip';

const ResumeModal = ({ FirstName, LastName, id }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle} id={"resumeModalButton"+id} className='shadow-none' style={{textDecoration: 'none', backgroundColor: 'transparent', border: 'transparent', height: '35px'}}>
                <i className="table-data far fa-file-alt fa-lg"></i>
                <span className="sr-only">Resume</span>
            </Button>
            <HoverToolTip placement='right' target={"resumeModalButton"+id} content='View Resume' />
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader className="modalheader" toggle={toggle}>{FirstName} {LastName} Resume</ModalHeader>
                <ModalBody className="modalbody">  
                <object width='100%' height='500px' data="https://www.easthighavid.com/uploads/1/3/3/6/13367187/the_one_pager.pdf" type="application/pdf">
                    <iframe id="Resume" title="Resume" src="https://www.easthighavid.com/uploads/1/3/3/6/13367187/the_one_pager.pdf"></iframe>
                </object>             
                </ModalBody>
                <ModalFooter>
                    <a download href="https://www.easthighavid.com/uploads/1/3/3/6/13367187/the_one_pager.pdf">
                        <Button color="primary" className="blue-button shadow-none" onClick={toggle}>Download</Button>
                    </a>
                    {' '}
                    <Button color="secondary" className="shadow-none" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ResumeModal;