import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Box, Container, Button } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();

  const goToPage = (id) => {
    navigate("/detail/" + id, {
      state: {
        info: "info " + id,
      },
    });
  };

  return (
    <Container fixed className="container" maxWidth="lg">
      <Box className="contentBox">
        <Button onClick={() => goToPage(1)} variant="primary">
          {" "}
          Detail 1
        </Button>
        <Button onClick={() => goToPage(2)} variant="primary">
          {" "}
          Detail 2
        </Button>
      </Box>
    </Container>
  );
}
