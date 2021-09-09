import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import styled from "styled-components";

const Wrapper = styled(Link)`
  border-radius: 0.5rem;
  border: 1px solid;
  background-color: #5f6caf;
  color: #fff;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  border: none;
  &:hover {
    background-color: #374bad;
  }
  &:focus {
    transform: scale(0.98);
  }
`;

const InnerLink = ({ userRoute, text }) => {
  return <Wrapper to={`/${userRoute}`}>{text}</Wrapper>;
};

InnerLink.proptype = {
  userRoute: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

InnerLink.defaultProps = {
  userRoute: "",
  text: "",
};

export default InnerLink;
