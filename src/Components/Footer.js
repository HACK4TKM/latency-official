import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import link from "../assets/link.png";
function Footer(props) {
  return (
    <div className="w-screen p-5 bg-purpleC4 p-5">
      <div className="text-white" />
      <div className="w-full mt-10 text-white  flex flex-col sm:flex-row justify-between">
        <div className="flex items-center justify-center">© latency 2022</div>
        <div className="flex items-center justify-center mt-5 sm:mt-0 sm:justify-end">
          <a href="https://www.instagram.com/latency/" className="ml-5">
            <img
              className="w-8 filter invert opacity-50 hover:opacity-100"
              src={insta}
              alt="instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/school/tkm-college-of-engineering-kollam/"
            className="ml-5"
          >
            <img
              className="w-8 filter invert opacity-50 hover:opacity-100"
              src={link}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
