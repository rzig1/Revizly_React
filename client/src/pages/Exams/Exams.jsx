import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Exams.css';
import '../../workers/pdfWorker'; // Correct path to import the worker

const Exams = () => {
  const [currentPdf, setCurrentPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null); // State for error handling

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

      <h1>PDF Reader Example</h1>
      <div className="pdf-container">
        {currentPdf && (
          <Document
            file={currentPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError} // Add error handling
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        )}
        {error && <div>Error loading PDF: {error}</div>} {/* Display error message */}
      </div>
    </div>
  );
};

export default Exams;
