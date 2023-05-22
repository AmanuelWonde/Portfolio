import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { Link as Navlink } from "react-router-dom";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from "@material-ui/icons/GitHub";
function Nav() {
  const [color,setColor] = useState("")

  const handelMouseMove =()=>{
    setColor('red')
  }
  const handleMouseDown =()=>{
    setColor("")
  }

  return (
    <div className="Nav">
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}
          >
      <div className="Home_header_name">Amanuel</div>
      </Link>
      <div className="Home_header_list">
        <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}
          >
            Home
          </Link>
          </li>
          <li>
            <Link   activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}>About</Link>
          </li>
          <li>
            <Link   activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}>What I Do</Link>
          </li>
          <li>
            <Link   activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}>Resume</Link>
          </li>
          <li>
            <Link   activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}>Portfolio</Link>
          </li>
          <li>
            <Link  
             activeClass="active"
            to="client"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}> Client</Link>
          </li>
          <li>
            <Link   activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}> Contact</Link>
          </li>
        </ul>
      </div>
      <div className="Home_header_icon" >
          <Navlink to= "https://twitter.com/WondeAmanuel?t=2Wuj5rz3xUAxjkGVOUnX2A&s=08" style={{textDecoration:'none',color:'white'}}>
        <div className="Nav_icon" >
          <TwitterIcon />
        </div>
          </Navlink>
        <Navlink to= "https://twitter.com/WondeAmanuel?t=2Wuj5rz3xUAxjkGVOUnX2A&s=08" style={{textDecoration:'none',color:'white'}}>
        <div className="Nav_icon">
        <GitHubIcon />
        </div>
        </Navlink>
        <Navlink to= "https://twitter.com/WondeAmanuel?t=2Wuj5rz3xUAxjkGVOUnX2A&s=08" style={{textDecoration:'none',color:'white'}}>
        <div className="Nav_icon">
        <LinkedInIcon />
        </div>
        </Navlink>
      </div>
    </div>
  );
}

export default Nav;
