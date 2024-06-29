// FormCard.js
import React from "react";
import PropTypes from "prop-types";

const FormCard = ({ children }) => {
  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    border: "solid 3px violet",
    boxShadow: "#9d00ff 0 4px 8px",
    backgroundColor: "black",
    color: "var(--card-text-color)",
    transition: "background-color 0.3s, color 0.3s",
  };

  return <div style={cardStyle}>{children}</div>;
};

FormCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormCard;
