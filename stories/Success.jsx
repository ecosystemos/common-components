import React from "react";
import PropTypes from "prop-types";
import { Title } from "./Title";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const Success = ({ label }) => {
  return (
    <Container>
      <Flex alignItems={"center"}>
        <CheckCircleIcon h={24} w={24} color="green" margin="0 24px 0 0" />
        <Title title={label} />
      </Flex>
    </Container>

  );
};

Success.propTypes = {
  label: PropTypes.string.isRequired,
};

Success.defaultProps = {};


//Styling
const Container = styled.div`
  max-width: 688px;
  padding: 32px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.radius};
`;

