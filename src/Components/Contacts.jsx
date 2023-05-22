import React from "react";
import "./Contacts.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
function Contacts() {
  return (
    <div className="Contacts" id="contacts">
      <div className="Contacts_header">
        <div className="Contacts_header_bold">CONTACTS</div>
        <div className="Contacts_header2">Get In Touch</div>
      </div>
      <div className="Contacts_contact">
        <div className="Contacts_adress">
          <h3>ADDRESS</h3>
          <div>
            Addis Ababa,
            <br />
            Ethiopia
          </div>
          <div className="Contacts_adress_adress">
            <div>
              <PhoneIcon style={{ color: "rgb(31, 204, 193)" }} /> +251
              967292497
            </div>
            <div className="Contacts_adress_adress_Email">
              <EmailIcon style={{ color: "rgb(31, 204, 193)" }} />
               <p>amanuelwt@gmail.com</p>
            </div>
          </div>
          <h3>FOLLOW ME</h3>
          <div className="Contacts_socialMedia">
            <Link to="https://twitter.com/WondeAmanuel?t=2Wuj5rz3xUAxjkGVOUnX2A&s=08" style={{textDecoration:'none',color:'white'}}>
              <div className="contactIcon">
                <FacebookIcon />
              </div>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
              <div className="contactIcon">
                <TwitterIcon />
              </div>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
              <div className="contactIcon">
                <LinkedInIcon />
              </div>
            </Link>
            <Link style={{textDecoration:'none',color:'white'}}>
              <div className="contactIcon">
                <GitHubIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="Contacts_email">
          <h3>SEND US A NOTE</h3>
          <form action="">
            <div className="Contacts_email_input">
              <input type="text" placeholder="Name" size="32" name="email" />
              <input type="text" placeholder="Email" size="32" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us more about your need..."
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
