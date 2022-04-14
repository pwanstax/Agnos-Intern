import React, {useState} from "react";
import MarkedAbs from "./MarkedAbs";
import {Box, Typography, Paper} from "@mui/material";
import {ABS_COORDINATE} from "../utils/constants/absUtils";

const AbsPage = () => {
  const [partOfAbs, setPartOfAbs] = useState("");

  const handleSelect = (selected) => {
    setPartOfAbs(selected);
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
        ปวดท้องที่บริเวณใดมากที่สุด?
      </Typography>
      <Box sx={{position: "relative"}}>
        <img
          src={require("../utils/images/abs/default-abs.png")}
          alt="default-abs"
          useMap="#defaultAbs"
          width="400"
          height="auto"
          style={{
            position: "relative",
            top: 0,
            left: 0,
          }}
        />
        <MarkedAbs partOfAbs={partOfAbs} />

        <map name="defaultAbs">
          {ABS_COORDINATE.map((each) => (
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

export default AbsPage;
