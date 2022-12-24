import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        ©{" "}
        <span id="copyright_year">
          {new Date().getFullYear()} My Blog App by <Link to="/contact">Ignatius Jonathan</Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
