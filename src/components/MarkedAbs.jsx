import React from "react";
import {Box} from "@mui/material";
import {ABS_AREA} from "../utils/constants/absUtils";

const MarkedAbs = ({partOfAbs}) => {
  if (partOfAbs === "") {
    return <Box></Box>;
  }
  if (partOfAbs === "all-over-highlight") {
    return (
      <Box>
        {ABS_AREA.map((each) => (
          <img
            key={each}
            src={require("../utils/images/abs/" + each + ".png")}
            alt={each}
            useMap="#defaultAbs"
            width="400"
            height="auto"
            style={{position: "absolute", top: 0, left: 0}}
          />
        ))}
      </Box>
    );
  }
  return (
    <Box>
      <img
        src={require("../utils/images/abs/" + partOfAbs + "-active.png")}
        alt={partOfAbs}
        useMap="#defaultAbs"
        width="400"
        height="auto"
        style={{position: "absolute", top: 0, left: 0}}
      />
      <img
        src={require("../utils/images/abs/" + partOfAbs + "-highlight.png")}
        alt={partOfAbs}
        useMap="#defaultAbs"
        width="400"
        height="auto"
        style={{position: "absolute", top: 0, left: 0}}
      />
    </Box>
  );
};

export default MarkedAbs;
