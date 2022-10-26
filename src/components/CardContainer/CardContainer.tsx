import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { cardData } from "../../mocks/cardData";

export const CardContainer = () => {
  return (
    <Container sx={{mt: 15, maxWidth: 1300, flexGrow: 1 }}>
      <Grid container>
        {cardData.map((card) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={card["id"]}>
            <FilmCard
              image={card["poster_path"]}
              name={card["original_title"]}
              date={card["release_date"]}
              rating={card["vote_average"]}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};