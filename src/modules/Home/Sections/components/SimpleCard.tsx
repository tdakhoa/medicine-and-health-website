import { Box, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import { Typography } from "../../../../components";

interface SimpleCardProps {
  title: string;
  content?: string;
  img: string;
  sx?: object;
}
const SimpleCard = ({
  title,
  content = "",
  img,
  sx = {},
  ...props
}: SimpleCardProps) => {
  return (
    <Card sx={sx} {...props}>
      <CardMedia sx={{ height: "50%" }} image={img} title="card img" />
      <CardContent>
        {/* <Typography gutterBottom size="h5">
          Lizard
        </Typography>
        <Typography text=size="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
