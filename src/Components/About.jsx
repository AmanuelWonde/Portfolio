import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about" id="about">
      <div className="about_header">
        <div className="about_header_bold">
       ABOUT ME
        </div>
        <h2>Know Me More</h2>
      </div>
      <div className="about_information">
        <div className="about_information_paragraph">
          <h2>I'm Amanuel Wonde, a Web Developer</h2>
          <br />
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <br />
          <p>
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="about_information_email">
          <ul>
            <li>Name: Amanuel Wonde</li>
            <hr />
            <li>
              Email: <Link to="">amanuelwt@gmail.com</Link>
            </li>
            <hr />
            <li>Age: 19</li>
            <hr />
            <li>From: Ethiopia, Addis Ababa</li>
            <hr />
            <button>Download CV</button>
          </ul>
        </div>
      </div>
      <div className="about_projectNo">
        <div>
          <h2>2+</h2>
          <p>Years Experiance</p>
        </div>
        <hr />
        <div>
        <h2>20+</h2>
          <p>Happy Clients</p>
        </div>
        <hr />
        <div>
        <h2>30+</h2>
          <p>Projects Done</p>
        </div>
        <hr />
        <div>
        <h2>2</h2>
          <p>Get Awards</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
