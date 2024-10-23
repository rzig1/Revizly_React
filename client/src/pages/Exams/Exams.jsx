import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Exams.css';
import '../../workers/pdfWorker'; // Correct path to import the worker
import { assets } from '../../assets/assets';

const Exams = () => {
  const [currentPdf, setCurrentPdf] = useState(null);
  

  const exams = [
    { title: 'Algo I Exam', level: '2LM', file: '/pdf/pdf1.pdf' },
    { title: 'Math Exam', level: '2LM', file: '/pdf/pdf2.pdf' }
  ];

  function onDocumentLoadSuccess({ numPages }) {
    console.log(`Loaded a document with ${numPages} pages.`);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setError(error.message);
  }

  return (
    <div>
      <section>
        {exams.map((exam, index) => (
          <div className="card" key={index}>
            <h4>{exam.title}</h4>
            <h5>{exam.level}</h5>
            <div className="btn-pdf">
              <button className="btn-read" onClick={() => {
                setError(null); // Clear any previous error
                setCurrentPdf(exam.file);
              }}>
                Read
              </button>
            </div>
          </div>
        ))}
      </section>

      <h1>PDF Reader </h1>
      <div className="pdf-container">
      <embed src={assets.pdf2} width="100%" height="600px" />
      </div>
    </div>
  );
};

export default Exams;
