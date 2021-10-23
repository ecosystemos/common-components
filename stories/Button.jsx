import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ isPrimary, label, onClick, marginRight }) => {
  return (
    <Container
      type="button"
      isPrimary={isPrimary}
      onClick={onClick}
      marginRight={marginRight}
    >
      <Text isPrimary={isPrimary}>
        {label}
      </Text>
    </Container>
  );
};

Button.propTypes = {
  isPrimary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  marginRight : PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isPrimary: true,
  onClick: undefined,
};

// Styling
const Container = styled.button`
  width: fit-content;
  text-align: center;
  border: ${props => `2px solid ${props.theme.colors.darkBlue}`};
  border-radius: ${props => props.theme.borderRadius.radius};
  padding: ${props => props.theme.padding.buttonPadding};
  margin: ${ ({ marginRight }) => !marginRight ? "16px 24px 0 0" : "16px 0 0 0"};
  background-color: ${props => props.isPrimary ? props.theme.colors.darkBlue : props.theme.colors.white};
  box-shadow: ${({ isPrimary }) => isPrimary ? `0px 4px 8px rgba(34, 44, 47, 0.16)` : null};
`;

const Text = styled.text`
  color: ${props => props.isPrimary ? props.theme.colors.white : props.theme.colors.darkBlue};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSizes.s};
`;