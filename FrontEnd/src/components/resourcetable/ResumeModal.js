import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText } from 'reactstrap';
// import HoverToolTip from '../HoverToolTip';

const ResumeModal = ({ FirstName, LastName, id }) => {

    const [data, setData] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
        if (!modal) getResume()
    };

    const getResume = (() => {
        axios({
            url: `http://localhost:5000/api/resources/resume/${id}`,
            method: 'GET',
            responseType: 'blob',
            headers: new Headers({
                'Content-Type': 'application/pdf'
            })
        }).then(res => {
            // Create a Blob from the PDF Stream
            const file = new Blob(
                [res.data], 
                {type: 'application/pdf'});
            // Build a URL from the file
            const fileURL = URL.createObjectURL(file) + '#toolbar=0&navpanes=0';
            setData(fileURL)
        }).catch(error => {
            setData('')
        })
      });

    const downloadResume = (() => {
            const a = document.createElement('a');
            a.download = FirstName+LastName+'Resume.pdf';
            a.href = data;
            a.click();
            a.href = '#';
    })

    return (
        <div>
            <Button onClick={toggle} id={"resumeModalButton"+id} className='shadow-none' style={{textDecoration: 'none', backgroundColor: 'transparent', border: 'transparent', height: '35px'}}>
                <i className="table-data far fa-file-alt fa-lg"></i>
                <span className="sr-only">Resume</span>
            </Button>
            {/* <HoverToolTip placement='right' target={"resumeModalButton"+id} content='View Resume' /> */}
            <Modal isOpen={modal} toggle={toggle} size='lg' contentClassName="ResumeModal">
                <ModalHeader className="modalheader" toggle={toggle}>{FirstName} {LastName} Resume</ModalHeader>
                <ModalBody style={{ position: 'relative' }} className="modalbody"> 
                { data === '' ? 
                <div className="text-center" style={{position: 'relative', top: '50%'}}>
                    <h3>No Resume Uploaded</h3>
                    <FormText color="muted">
                        Resume has not been uploaded or was uploaded in the wrong format.
                    </FormText>
                </div> :
                    <object width='100%' height='100%' data={data} type="application/pdf">
                        <iframe id="Resume" title="Resume" src={data}></iframe>
                    </object>          
                } 
                </ModalBody>
                <ModalFooter>
                { data === '' ?
                    <Button color="primary" className="blue-button disabledBtn shadow-none" disabled>Download</Button> :
                    <Button color="primary" className="blue-button shadow-none" onClick={downloadResume}>Download</Button>
                }
                    {' '}
                    <Button color="secondary" className="shadow-none" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ResumeModal;