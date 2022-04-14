import React, {useState} from "react";
import {Grid, Button} from "@mui/material";
import AbsQuestion from "../components/AbsQuestion";
import FingersQuestion from "../components/FingersQuestion";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(true);
  const handleChangePage = () => {
    setCurrentPage(!currentPage);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{minHeight: "100vh"}}
    >
      <Grid item display="flex" justifyContent="center">
        {currentPage ? <AbsQuestion /> : <FingersQuestion />}
      </Grid>
      <Grid item display="flex" justifyContent="center">
        <Button
          variant="outlined"
          size="large"
          sx={{borderRadius: 3, marginTop: 2, borderWidth: 2, width: 400}}
          onClick={(_) => handleChangePage()}
        >
          {currentPage ? "ต่อไป" : "ย้อนกลับ"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainPage;
