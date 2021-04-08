import React from "react";
import { HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
export const SDPScaleComponent = ({ from, to, value }) => {
  const Wrap = styled.div`
    color: ${(props) => props.theme.light};
    position: absolute;
    height: 22px;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: center;
    line-height: 22px;
  `;
  const Cube=styled.div`
      height:22px;
      background:${(props) => props.position==="Mid"?"#4CA6CD":"#B4E4F8"};
      width:${(props) => props.widthScale};
  `;
  // eslint-disable-next-line no-unused-vars
  const light = {
    light: "white",
  };
  // eslint-disable-next-line no-unused-vars
  const dark = {
    dark: "#737373",
  };

  const boxType = ["Start", "Mid", "End"];

  const sendHeightVal = (data) => {
    if (data === "Start") {
      if (from === 100 && to === 0) {
        return 100; 
      } else if (to === 100 && from === 0) {
        return 0; 
      } else {
        return from; 
      }
    } else if (data === "Mid") {
      if (from === 100 && to === 0) {
        return 0;
      } else if (to === 100 && from === 0) {
        return 100; 
      } else {
        return from > to ? from - to : to - from; 
      }
    } else if (data === "End") {
      if (from === 100 && to === 0) {
        return 0;
      } else if (to === 100 && from === 0) {
        return 0; 
      } else {
        return 100 - to; 
      }
    }
  };
  return (
    <ThemeProvider theme={light}>
      <HStack spacing="0px">
        <Wrap className="sdp-scale-text">{value}</Wrap>
        {boxType.map((type,key) => {
          return (
            <Cube key={key}
            widthScale={() => {
                return sendHeightVal(type) + "%";
              }}
              position={type}
            />
          );
        })}
      </HStack>
    </ThemeProvider>
  );
};
SDPScaleComponent.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  value: PropTypes.number,
  theme: PropTypes.string,
  position: PropTypes.string,
  widthScale: PropTypes.string,
};
