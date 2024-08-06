import React from 'react';

const DownloadPdf = () => {
  return (
    <div>
      <h1>Download Our PDF</h1>
      <p>Click the link below to download the PDF:</p>
      <a href={`${process.env.PUBLIC_URL}/CoverLetter.pdf`} download="CoverLetter.pdf">
        Download PDF
      </a>
    </div>
  );
};

export default DownloadPdf;
