import React from "react";
import {Box} from "@mui/material";

const MarkedFingers = ({partOfFingers}) => {
  if (partOfFingers === "") {
    return <Box></Box>;
  }
  if (partOfFingers === "others") {
    return (
      <Box>
        <img
          src={require("../utils/images/fingers/" +
            partOfFingers +
            "-highlight.png")}
          alt={partOfFingers}
          useMap="#defaultFingers"
          width="400"
          height="auto"
          style={{position: "absolute", top: 0, left: 0}}
        />
      </Box>
    );
  }
  return (
    <Box>
      <img
        src={require("../utils/images/fingers/" +
          partOfFingers +
          "-active.png")}
        alt={partOfFingers}
        useMap="#defaultFingers"
        width="400"
        height="auto"
        style={{position: "absolute", top: 0, left: 0}}
      />
      <img
        src={require("../utils/images/fingers/" +
          partOfFingers +
          "-highlight.png")}
        alt={partOfFingers}
        useMap="#defaultFingers"
        width="400"
        height="auto"
        style={{position: "absolute", top: 0, left: 0}}
      />
    </Box>
  );
};

export default MarkedFingers;
