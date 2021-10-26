import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import styled from "styled-components";
import { Title } from "./Title";

export const Card = ({ title, content, primaryFunction, secondaryFunction, ...props }) => {

  return (
    <Container {...props}>
      <Title title={title} />
      <Content> {content} </Content>
      <Flex>
        <Spacer />
        {/* Set the text for the button as required to the issue */}
        <Button label={"Cancel"} isPrimary={false} onClick={secondaryFunction} />
        <Button label={"Archive Note"} isPrimary={true} onClick={primaryFunction} marginRight={true} />
      </Flex>
    </Container>

  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  primaryFunction: PropTypes.func.isRequired,
  secondaryFunction: PropTypes.func.isRequired,
};

// Styling
const Container = styled.div`
  max-width: 688px;
  padding: 32px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.radius};
`;


const Content = styled.text`
  margin-bottom: 16px;
  line-height: 30px;
  color: ${props => props.theme.colors.textGray};
  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSizes.medium};
`;
