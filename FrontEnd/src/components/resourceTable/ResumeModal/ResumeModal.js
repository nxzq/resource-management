import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText, Spinner } from 'reactstrap';

export default React.memo(function ResumeModal({ FirstName, LastName, id }) {

    const [data, setData] = useState('');
    const [modal, setModal] = useState(false);
    const [loader, setLoader] =useState(true);
    const toggle = () => {
        setModal(!modal)
        if (!modal) getResume()
    };

    const getResume = (() => {
        axios({
            url: `http://localhost:5000/api/resources/${id}/resume`,
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
            setLoader(false)
        }).catch(error => {
            setData('')
            setLoader(false)
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
            <Button onClick={toggle} tabIndex={0} id={"resumeModalButton"+id} title="View Resume" className='shadow-none' style={{textDecoration: 'none', backgroundColor: 'transparent', border: 'transparent', height: '35px'}}>
                <i className="table-data far fa-file-alt fa-lg"></i>
                <span className="sr-only">Resume</span>
            </Button>
            <Modal isOpen={modal} toggle={toggle} centered size='lg' contentClassName="ResumeModal">
                <ModalHeader className="modalheader" toggle={toggle}>{FirstName} {LastName} Resume</ModalHeader>
                <ModalBody style={{ position: 'relative' }} className="modalbody"> 
                { loader ? 
                <div style={{ top: '50%', right: '50%', position: 'absolute' }} className="text-center"><Spinner color="primary" /></div>
                : data === '' ? 
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
                { loader ? null : data === '' ?
                    <Button color="primary" className="blue-button disabledBtn shadow-none" disabled>Download</Button> :
                    <Button color="primary" className="blue-button shadow-none" onClick={downloadResume}>Download</Button>
                }
                    {' '}
                    <Button color="secondary" className="shadow-none" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
});