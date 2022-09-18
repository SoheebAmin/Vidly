import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartBroken,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

// Input: Needs to know if given move is liked or not.
// Output: The events raised. It should raise an onClock and toggle like property.

const Like = (props) => {
  var heart = faHeartBroken;

  if (props.liked) heart = faHeartCircleCheck;

  return (
    <FontAwesomeIcon
      icon={heart}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    />
  );
};

export default Like;
