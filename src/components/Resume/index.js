import React from 'react';
import myPDF from '/Users/SamMi/OneDrive/Documents/React-Portfolio/src/assets/resumes/resume.pdf';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
      Download my <a href={myPDF} download="Resume.pdf"> Resume here!</a>
        </p>
      </div>
    </section>
  );
}

export default Resume;
