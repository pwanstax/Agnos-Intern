import React, {useState} from "react";
import MarkedFingers from "./MarkedFingers";
import {Box, Typography, Paper} from "@mui/material";
import {FINGERS_COORDINATE} from "../utils/constants/fingersUtils";

const FingersPage = () => {
  const [partOfFingers, setPartOfFingers] = useState("");

  const handleSelect = (selected) => {
    setPartOfFingers(selected);
  };

  return (
    <Paper
      position="relative"
      sx={{paddingTop: 5, borderRadius: 3, boxShadow: 3}}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        จุดไหนที่คุณปวดนิ้วมากที่สุด?
      </Typography>
      <Box sx={{position: "relative"}}>
        <img
          src={require("../utils/images/fingers/default-finger.png")}
          alt="default-fingers"
          useMap="#defaultFingers"
          width="400"
          height="auto"
          style={{
            position: "relative",
            top: 0,
            left: 0,
          }}
        />
        <MarkedFingers partOfFingers={partOfFingers} />

        <map name="defaultFingers">
          {FINGERS_COORDINATE.map((each) => (
            <area
              key={each.coor}
              shape={each.shape}
              coords={each.coor}
              alt={each.area}
              onClick={(_) => handleSelect(each.area)}
              style={{
                cursor: "pointer",
              }}
            />
          ))}
        </map>
      </Box>
    </Paper>
  );
};

export default FingersPage;
