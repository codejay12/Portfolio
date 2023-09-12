import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumefile from './Reesu.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(prevPage => (prevPage <= 1 ? 1 : prevPage - 1));

  const goToNextPage = () =>
    setPageNumber(prevPage =>
      prevPage + 1 >= numPages ? numPages : prevPage + 1
    );

  return (
    <div className="container mx-auto">
      <div>
        <nav>
          <button
            className="px-4 py-1 m-3 ring-1 text-black rounded-md hover:bg-blue-500 hover:text-white"
            onClick={goToPrevPage}
          >
            Prev
          </button>
          <button
            className="px-4 py-1 m-3 ring-1 text-black rounded-md hover:bg-blue-500 hover:text-white"
            onClick={goToNextPage}
          >
            Next
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </nav>
      </div>

      <div className="flex justify-center border-2 shadow-xl">
        <Document file={resumefile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
