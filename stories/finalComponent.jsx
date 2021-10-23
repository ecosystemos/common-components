import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "./Card";
import { Success } from "./Success";



export const Component = ({ cardTitle, cardContent, successTitle }) => {
  //Function to display the card or the successCard
  const [archived, setActive] = useState();

  return (
    <div>
      {
        !archived &&
        <Card
        content={ cardContent }
        title={ cardTitle }
        primaryFunction={ () => { setActive(true) } }
        secondaryFunction={ () => { console.log("Cancel clicked") } }
        />
      }
      {archived && <Success label={ successTitle }/>}
    </div>

  );
};

Component.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardContent: PropTypes.string.isRequired,
  successTitle: PropTypes.string.isRequired,
};

Component.defaultProps = {
  cardTitle: 'cardTitle',
  cardContent : 'cardContent',
  successTitle: 'successTitle'
};