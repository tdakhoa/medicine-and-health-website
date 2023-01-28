import React from "react";
import {
  styled,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import Typography from "../Typography/Typography";

interface Data {
  title: string[];
}

interface CategoryAccordionProps {
  data: Data[];
}

const CategoryAccordion = ({ data, ...props }: CategoryAccordionProps) => {
  return <List>{data.map((item, i) => RenderListItem(item, i))}</List>;
};

export default CategoryAccordion;

const Accordion = styled(MuiAccordion)(() => ({
  border: "none",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
}));

interface ListItem {
  title: string[];
}

const RenderListItem = (item: ListItem, index: number) => {
  if (item.title.length == 1)
    return (
      <ListItemButton key={index}>
        <ListItemText primary={item.title[0]} sx={{ "& .MuiTypography-root": { fontWeight: 700 } }} />
      </ListItemButton>
    );
  else
    return (
      <Accordion disableGutters key={index}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography sx={{ fontWeight: 700 }}>{item.title[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {item.title.map((e, i) =>
            i != 0 ? (
              <ListItemButton key={i}>
                <ListItemText primary={e} />
              </ListItemButton>
            ) : null
          )}
        </AccordionDetails>
      </Accordion>
    );
};
