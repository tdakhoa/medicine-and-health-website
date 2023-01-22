import { Box, Card, CardMedia } from "@mui/material";
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
    <Card>
      <CardMedia></CardMedia>
    </Card>
  );
};

export default SimpleCard;
