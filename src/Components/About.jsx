import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about" id="about">
      <div className="about_header">
        <div className="about_header_bold">ABOUT ME</div>
        <h2>Know Me More</h2>
      </div>
      <div className="about_information">
        <div className="about_information_paragraph">
          <h3>
            {" "}
            Welcome to my website! My name is Amanuel Wonde, and I'm a junior
            full-stack web developer with a passion for building beautiful,
            intuitive, and user-friendly websites
          </h3>
          <br />
          <p>
            Ever since I was young, I've been drawn to computers and technology.
            As I grew older, I became more interested in web development and the
            ability to create websites that can reach people all over the world.
            I pursued my passion by studying Fullstack web development at
            Evangadi Tech and Software Engineering at AASTU, and since then,
            I've been building websites that help businesses and individuals
            achieve their goals online.
          </p>
          <br />
          <p>
            As a full-stack developer, I have experience working with a variety
            of programming languages, such as Javascript,Python,C++,JAVA, and
            frameworks such as React and Next js. I specialize in creating
            responsive websites that look great on any device, from desktop
            computers to mobile phones.
          </p>
          <br />

          <p>
            My approach to web development is to put the user's needs first. I
            believe that a website should be easy to use, intuitive, and
            visually appealing. I strive to create websites that not only look
            great, but also provide a seamless user experience.
          </p>
          <br />

          <p>
            Thank you for visiting my website, and I hope you enjoy exploring my
            portfolio of projects. If you have any questions or would liketo
            collaborate on a project, please don't hesitate to get in touch via
            my contact page.
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
