import { pdfjs } from 'react-pdf';

// Set the workerSrc property to point to the pdf.worker.js file
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;
