import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useAPI from "../../Services/APIs/Common/useAPI";
import Person from "../../Services/APIs/Persons/Persons";

export default function Home() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  const getPersonAPI = useAPI(Person.getPersons);

  useEffect(() => {
    let payload = {
      token: "UHiF_oiVC05Rj_MMuX_kfw",
    };

    getPersonAPI
      .requestPromise(payload)
      .then((info) => {
        console.log(info);
        let cards = [];
        info.persons.forEach((person) => {
          cards.push(
            <Grid key={person.CPF} item lg={4} md={6} sm={12}>
              <Card className="cardBox">
                <CardMedia
                  component="img"
                  height="140"
                  image={person.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {person.firstName} {person.lastName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.jobTitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        });

        setCards(cards);
      })
      .catch((info) => {
        console.log(info);
      });
  }, []);

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
        <Grid container>{cards}</Grid>

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
