import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialSiteIcon = () => {
  return (
    <div className="social-site-icon-style justify-content-center mt-3 mb-3">
      <a href="https:/instagram.com" target='_blank' rel="noopener noreferrer">
        <FaInstagram size="2rem" color="white"/>
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https:/instagram.com"  target='_blank'rel="noopener noreferrer">
        <FaFacebook size="2rem" color="white" />
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https:/instagram.com"  target='_blank' rel="noopener noreferrer">
        <FaTwitter size="2rem" color="white" />&nbsp;
      </a>
    </div>
  );
};

export default SocialSiteIcon;
