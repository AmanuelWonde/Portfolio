import React from "react";
import SummaryComponent from "./SummaryComponent";
function Summary() {
  return (
    <div className="Summary" id="resume">
      <div className="Summary_header">
        <div className="Summary_header_bold">SUMMARY</div>
        <h2> Resume</h2>
      </div>
      <div className="Summary_childWrappeer">
        <div>
          <div className="summary_componentTopic">My Education</div>
          <SummaryComponent year="2020-2021" title="Fullstack Web Development" camp="Evangadi Network" description="I attended Evangadi tech full stack web development (MERN STACK) bootcamp. "/>
          <SummaryComponent year="Currently" title="Software Engineer" camp="Addis Ababa Science And Technology University" description="In 2022  I attened at addis ababa science and technology university and currently i'm software engineering student."/>
        </div>
        <div>
          <div className="summary_componentTopic">My Experience</div>
          <SummaryComponent year="2021-2023" title="Clones" camp="Amazon Netflix, And Others" description ="I have been developed big and amazing web clones."/>
          <SummaryComponent  year="2023" title="Developed Evangadi Forum" camp="Evangadi Tech" description="Evangadi Network is one of the Tech bootcamp in America.I developed Evangadi forum that let evangadi students to ask any tech related question,answer for questions asked by other students and get the answer for thier questions. "/>
        </div>
      </div>
    </div>
  );
}

export default Summary;
