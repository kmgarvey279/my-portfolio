import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import PropTypes from "prop-types";
import './CV.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myPDF from "../assets/Resume.pdf";
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class CV extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
        <Modal isOpen={true} className="cv-modal" size="lg">
            <Document file={myPDF} className="cv-doc">
              <Page pageNumber={1} className="cv-page" width={790}/>
            </Document>
            <FontAwesomeIcon onClick={() => this.props.toggleModal()} className="close-modal-icon" icon={faWindowClose} size="2x" /> 
            <div className="download">
              <a href={myPDF} download>
                Download <FontAwesomeIcon icon={faDownload} size="sm" />
              </a>
            </div>
        </Modal>
    );
  }
}

CV.propTypes = {
  toggleModal: PropTypes.func
}