import React from "react";
import PageLinks from "./PageLinks";
import { socilaLink } from "../data";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socilaLink.map((link) => {
          // const {id, href, icon } = link
          return (
            <SocialLink key={link.id} {...link} itemClass="footer-icon" />

            // <li key={id}>
            //   <a href={href} target="_blank" className="footer-icon">
            //     <i className={icon}></i>
            //   </a>
            // </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
