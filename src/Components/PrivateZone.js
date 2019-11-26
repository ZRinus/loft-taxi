import React from "react";

function PrivateZone(props) {

  if (!props.showPlease) {
    return null;
  }

  return <div>Личный кабинет</div>;
}

export default PrivateZone;