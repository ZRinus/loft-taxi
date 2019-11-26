import React from "react";

function MyMap(props) {

  if (!props.showPlease) {
    return null;
  }

  return <div>Моя карта</div>;
}

export default MyMap;