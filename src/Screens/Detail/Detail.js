import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Container, Stack, Button, Typography, Box } from "@mui/material";
import "./Detail.css";
const Detail = () => {
  const { infoID } = useParams();
  const {
    state: { info },
  } = useLocation();

  let navigate = useNavigate();

  const onBackButton = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Box className="contentBox">
        <Typography variant="h1" color="primary">
          {" "}
          ID = {infoID}
        </Typography>
        <Typography variant="h1" color="primary">
          {" "}
          Info = {info}
        </Typography>
        <Button onClick={() => onBackButton()} variant="primary">
          Voltar
        </Button>
      </Box>
    </Container>
  );
};

export default Detail;
