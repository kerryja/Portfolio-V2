import * as React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialStyles = {
  fontSize: "2.5rem",
  marginTop: "2rem",
};

const Social = () => {
  return (
    <div style={socialStyles}>
      <FaLinkedin />
      <FaGithub />
      <HiOutlineMail />
    </div>
  );
};

export default Social;
