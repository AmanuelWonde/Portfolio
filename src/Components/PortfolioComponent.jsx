import React, { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
export function PortfolioComponent2({ background, prtitle,link }) {
  const [title, setTitle] = useState("");
  const hoverHendler = () => {
    setTitle(prtitle);
  };
  const downHandler = () => {
    setTitle("");
  };
  return (
    <div className="portfolioComponent2">
      <Link to ={link}>
      <div
       onMouseOver={hoverHendler}
       onMouseOut={downHandler}
        style={{ backgroundImage: `url(${background})` }}
        className="portfolioComponent2_imageWrapper">
      </div>
      </Link>
      <p className="PortfolioComponent_paragraph">{title}</p>
    </div>
  );
}
function PortfolioComponent({ background, prtitle,link }) {
  const [title, setTitle] = useState("");
  const hoverHendler = () => {
    setTitle(prtitle);
  };
  const downHandler = () => {
    setTitle("");
  };
  return (
    <div className="PortfolioComponent_main">
      <Link to={link}>
      <div
        className="PortfolioComponent"
        onMouseOver={hoverHendler}
        onMouseOut={downHandler}
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
      </Link>
      <p className="PortfolioComponent_paragraph">
      {title}
      </p>
    </div>
  );
}
export default PortfolioComponent;
