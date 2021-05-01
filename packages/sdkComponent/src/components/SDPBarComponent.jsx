import React from "react";
import { Grid } from "@chakra-ui/react";
import { SDPScaleComponent } from "./subComponents/SDPScaleComponent";
import PropTypes from "prop-types";
import styled from "styled-components";

export function SDPBar({ from = 0, to = 1 }) {
  const range = [-2, -1, 0, 1, 2, 3];
  const Wrap = styled.div`
    margin-left: 7px;
  `;

  const FromVal = val => {
    if (from >= val) {
      return Math.abs(val - from - 0.1) * 100 > 100
        ? 100
        : Math.abs((val - from) * 100);
    } else if (to >= val + 1 && from <= val) {
      return 0;
    } else if (to >= val) {
      return 0;
    } else {
      return 100;
    }
  };
  const ToVal = val => {
    if (to < val + 1 && val <= to) {
      return Math.abs((val % 1) - (to % 1)) * 100;
    } else {
      return 100;
    }
  };
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2}>
      {range.map((val, key) => {
        return (
          <Wrap key={key}>
            <SDPScaleComponent
              from={FromVal(val)}
              to={ToVal(val)}
              value={val}
            />
          </Wrap>
        );
      })}
    </Grid>
  );
}
SDPBar.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
};
