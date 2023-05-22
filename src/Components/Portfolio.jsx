import React from "react";
import background from "./daniel-korpai-tE_kGhscUTU-unsplash.jpg";
import PortfolioComponent from "./PortfolioComponent";
import amazon from "./Image/mariia-shalabaieva-V02us-4rNE8-unsplash.jpg"
import netflix from "./Image/thibault-penin-GrzoKN1aqSg-unsplash.jpg"
import zoom from "./Image/rubaitul-azad-J0eqDgSQDYg-unsplash.jpg"
import netflix2 from "./Image/charlesdeluvio-9uS7yhHjSuY-unsplash.jpg"
import apple from "./Image/laurenz-heymann-wAygsCk20h8-unsplash.jpg"
import evngadiForum from "./Image/meta-logo.jpg"

import { PortfolioComponent2 } from "./PortfolioComponent";
function Portfolio() {
  return (
    <div className="Portfolio" id="portfolio">
      <div className="Portfolio_textWrapper">
        <div className = "Portfolio_Nav">PORTFOLIO</div>
         <div className="Portfolio_title">My Works</div>
      </div>
      <div className="Portfolio_componentWrapper">
        <div>
          <PortfolioComponent
            background={zoom}
            prtitle="Amazon Clone"
            link = "https://clone-f69e0.web.app"
          />
          <PortfolioComponent
            background={apple}
            prtitle="Apple Clone"
            link="https://netflix-clone-25307.web.app"
          />
        </div>
        <div>
          <PortfolioComponent2
            background={netflix2}
            link="https://netflix-clone-25307.web.app"
            prtitle="Netflix clone"
          />
        </div>
        <div>
          <PortfolioComponent
            background={evngadiForum}
            prtitle="Evangadi forum"
            link="https://forum-frontend-ajo.pages.dev/"
          />
          <PortfolioComponent
            background={amazon}
            prtitle="Zoom Clone"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
