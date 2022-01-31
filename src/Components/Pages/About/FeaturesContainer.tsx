import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { featuresData } from "../../../App/Config/featuresData";
import { Feature } from "./Feature";

export const FeaturesContainer = () => {
  const [showOptions, setOptionsVisibility] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 350) {
        setOptionsVisibility(true);
      }
    });
  }, []);
  return (
    <Grid container spacing={2}>
      {featuresData.map((feature, idx) => {
        return (
          <Feature
            showOptions={showOptions}
            delay={feature.delay}
            key={idx}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        );
      })}
    </Grid>
  );
};
