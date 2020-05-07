import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const AdditionalInformation = ({ id }) => {
  return (
    <div>
      <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
    </div>
  );
};

AdditionalInformation.propTypes = {
  id: PropTypes.string,
};

export default AdditionalInformation;
