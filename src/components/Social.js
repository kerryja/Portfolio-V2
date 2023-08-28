import * as React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = ({ flexDirection, color, size, gap, leftMargin }) => {
  const Container = styled.div`
    margin-left: ${leftMargin};
    display: flex;
    margin-top: 1em;
    width: 6em;
    position: relative;
    color: ${color};
    flex-direction: ${flexDirection};
    justify-content: stretch;
    gap: ${gap};
  `;

  const LinkStyles = styled.a`
    color: ${color};
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  `;
  return (
    <Container>
      <LinkStyles
        href="https://www.linkedin.com/in/kerrylaval/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={size} />
      </LinkStyles>
      <LinkStyles
        href="https://github.com/kerryja"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={size} />
      </LinkStyles>
      <LinkStyles href="mailto:me@kerry.dev">
        <HiOutlineMail size={size} />
      </LinkStyles>
    </Container>
  );
};

export default Social;
