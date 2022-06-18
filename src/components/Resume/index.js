import React from "react";
import resume from "../../assets/ingram-resume.pdf";

function Resume() {
  return (
    <div className="w-100 justify-content-center">
      <div className="resume-container">
        <iframe
          title="resume"
          height="100%"
          width="100%"
          src={resume}
          style={{ margin: "0 auto" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
