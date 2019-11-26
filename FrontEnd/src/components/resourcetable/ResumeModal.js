import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import HoverToolTip from '../HoverToolTip';

const ResumeModal = ({ FirstName, LastName, id }) => {

    const [data, setData] = useState();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    useEffect(() => {
        axios({
            url: `http://localhost:5000/api/resources/pdf`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then(res => {
            //Create a Blob from the PDF Stream
            const file = new Blob(
                [res.data], 
                {type: 'application/pdf'});
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            setData(fileURL)
          })
      }, [])

    return (
        <div>
            <Button onClick={toggle} id={"resumeModalButton"+id} className='shadow-none' style={{textDecoration: 'none', backgroundColor: 'transparent', border: 'transparent', height: '35px'}}>
                <i className="table-data far fa-file-alt fa-lg"></i>
                <span className="sr-only">Resume</span>
            </Button>
            {/* <HoverToolTip placement='right' target={"resumeModalButton"+id} content='View Resume' /> */}
            <Modal isOpen={modal} toggle={toggle} size='lg' contentClassName="ResumeModal">
                <ModalHeader className="modalheader" toggle={toggle}>{FirstName} {LastName} Resume</ModalHeader>
                <ModalBody className="modalbody"> 
                    <object width='100%' height='100%' data={data} type="application/pdf">
                        <iframe id="Resume" title="Resume" src={data}></iframe>
                    </object>           
                </ModalBody>
                <ModalFooter>
                    <a download href={data}>
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