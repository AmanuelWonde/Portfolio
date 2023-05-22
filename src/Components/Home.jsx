import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import image from './Image/+251 96 729 2497 20230520_173422.jpg'
import Nav from "./Nav";
function Home() {
  return (
    <div className="Home" id="home">
      <Nav/>
      <div className="Home_body">
        <div>
        <h2>Welcome</h2>
        <h3 className="Home_name">I'm Amauel Wonde</h3>
        <h3>FullStack Web Developer</h3>
        <Link
            activeClass="active"
            to="contacts"
            // spy={true}
            smooth={true}
            offset={50}
            duration={700}
            delay={100}
          >
        <button>Hire Me</button>
        </Link>
      </div>
      <img src={image} alt="" />
    </div>
    </div>
  );
}

export default Home;
