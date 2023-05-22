import React from "react";
import "./Service.css";
import PieChartIcon from "@material-ui/icons/PieChart";
import ServiceComponent from "./ServiceComponent";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import BrushIcon from "@material-ui/icons/Brush";
import HighlightIcon from "@material-ui/icons/Highlight";
function Service() {
  return (
    <div className="service" id="service">
      <div className="service_header">
        <div className="service_header_bold">SERVICES</div>
        <h2>What I Do?</h2>
      </div>
      <div className="service_componentWrapper">
        <div>
          <ServiceComponent
            icon={
              <PieChartIcon
                style={{ fontSize: 60, color: "rgba(35, 176, 148, 0.493)" }}
              />
            }
            header="Web Development"
            paragraph="I'm a full stack web developer for more than two year.I realy passionated in web development and i'm working on solving real world using my passion."
          />
          <ServiceComponent
            icon={
              <BorderColorIcon
                style={{ fontSize: 60, color: "rgba(35, 176, 148, 0.493)" }}
              />
            }
            header="UX/UX Design"
            paragraph=""
          />
        </div>
        <div>
          <ServiceComponent
            icon={
              <DesktopWindowsIcon
                style={{ fontSize: 60, color: "rgba(35, 176, 148, 0.493)" }}
              />
            }
            header="Web Design"
            paragraph="I design and develop business and personal web design using figma and latest technology for web design."
          />
          <ServiceComponent
            icon={
              <BrushIcon
                style={{ fontSize: 60, color: "rgba(35, 176, 148, 0.493)" }}
              />
            }
            header="App  Design  & Develop"
            paragraph=""
          />
        </div>
      </div>
    </div>
  );
}
export default Service;
