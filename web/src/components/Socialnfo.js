import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin: auto;

  gap: 3rem;
  height: max-content;
`;

const Div = styled.div`
  &:first-of-type {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    height: 3.1rem;
    width: 3.2rem;
    border-radius: 0.7rem;
    padding: 0.2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    a {
      color: #fff;
      font-size: 2.7rem;
      margin: auto;
    }
    @media screen and (max-width: 768px) {
      width: 2.1rem;
      height: 2rem;
      border-radius: 0.4rem;
      a {
        font-size: 1.7rem;
      }
    }
  }

  &:nth-of-type(2) {
    a {
      color: #1da1f2;
    }
  }
  &:nth-of-type(3) {
    a {
      color: #0e76a8;
    }
  }
  &:last-of-type {
    a {
      color: #171515;
    }
  }
`;

const HyperLink = styled.a`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Socialnfo = () => {
  return (
    <Section>
      <Div>
        <HyperLink
          target="_blank"
          href="https://www.instagram.com/just_a_devguy/"
        >
          <FaInstagram />
        </HyperLink>
      </Div>

      <Div>
        <HyperLink target="_blank" href="https://twitter.com/just_a_devguy/">
          <FaTwitter />
        </HyperLink>
      </Div>

      <Div>
        <HyperLink
          target="_blank"
          href="https://www.linkedin.com/in/adler-luders-b55b209b"
        >
          <FaLinkedin />
        </HyperLink>
      </Div>

      <Div>
        <HyperLink target="_blank" href="https://github.com/adluders">
          <FaGithub />
        </HyperLink>
      </Div>
    </Section>
  );
};

export default Socialnfo;
