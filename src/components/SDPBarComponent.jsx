import React from "react";
import { Grid } from "@chakra-ui/react";
import { SDPScaleComponent } from "./subComponents/SDPScaleComponent";
import "../assets/Css/Component.css";
import PropTypes from "prop-types";

export function SDPBar({ from = 0, to = 1 }) {
  const FromVal = (val) => {
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
  const ToVal = (val) => {
    if (to < val + 1 && val <= to) {
      return Math.abs((val % 1) - (to % 1)) * 100;
    } else {
      return 100;
    }
  };
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2} className="grid-item">
      <SDPScaleComponent from={FromVal(-2)} to={ToVal(-2)} value={-2} />
      <SDPScaleComponent from={FromVal(-1)} to={ToVal(-1)} value={-1} />
      <SDPScaleComponent from={FromVal(0)} to={ToVal(0)} value={0} />
      <SDPScaleComponent from={FromVal(1)} to={ToVal(1)} value={1} />
      <SDPScaleComponent from={FromVal(2)} to={ToVal(2)} value={2} />
      <SDPScaleComponent from={FromVal(3)} to={ToVal(3)} value={3} />
    </Grid>
  );
}
SDPBar.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
};
