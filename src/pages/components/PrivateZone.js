import React from "react";
import PropTypes from "prop-types";


function PrivateZone(props) {


  if (!props.showPlease) {
    return null;
  }

  return <div>Личный кабинет</div>;
}

PrivateZone.propTypes = {
  showPlease: PropTypes.bool
}

export default PrivateZone;