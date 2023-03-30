import React from "react";
import { Link } from "react-router-dom";
import { FooterCss } from "./FooterCss";

const Footer = () => {
  return (
    <>
      <FooterCss>
        <Link to="about" target="_blank">
          이력서입니다.
        </Link>
      </FooterCss>
    </>
  );
};

export default Footer;
