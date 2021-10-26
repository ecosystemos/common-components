import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

export const Title = ({ title }) => {
  return (
    <Text> {title} </Text>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};


const Text = styled.h1`
  margin: 16px 0;
  color: ${props => props.theme.colors.textDarkGray};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: normal;
`;