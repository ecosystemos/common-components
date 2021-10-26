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
          content={cardContent}
          title={cardTitle}
          primaryFunction={() => {
            {/* When pressed, we setState the component to show the new archived dialog */}
            setActive(true);
          }}
          secondaryFunction={() => {
            {/* No action to do, so I put a print to see that the button is working */}
            console.log("Cancel clicked");
          }}
        />
      }
      {archived && <Success label={successTitle} />}
    </div>

  );
};

Component.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardContent: PropTypes.string.isRequired,
  successTitle: PropTypes.string.isRequired,
};

Component.defaultProps = {
  cardTitle: "cardTitle",
  cardContent: "cardContent",
  successTitle: "successTitle",
};