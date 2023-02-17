import React, { useState } from "react";
import Link from "next/link";
import {
    styled,
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

import Typography from "../Typography/Typography";

const CategoryAccordion = ({ data, ...props }: CategoryAccordionProps) => {
    return (
        <List>
            {data.map((item, index) =>
                item.title.length == 1 ? (
                    <Link key={index} href={item.link[0]}>
                        <ListItemButton>
                            <ListItemText
                                primary={item.title[0]}
                                sx={{ "& .MuiTypography-root": { fontWeight: 700 } }}
                            />
                        </ListItemButton>
                    </Link>
                ) : (
                    <Accordion key={index} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            <Link href={item.link[0]}>
                                <Typography weight="bold">{item.title[0]}</Typography>
                            </Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.title.map((e, i) =>
                                i != 0 ? (
                                    <Link key={i} href={item.link[i]}>
                                        <ListItemButton>
                                            <ListItemText primary={e} />
                                        </ListItemButton>
                                    </Link>
                                ) : null
                            )}
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </List>
    );
};

export default CategoryAccordion;

interface Data {
    title: string[];
    link: string[];
}

interface CategoryAccordionProps {
    data: Data[];
}

const Accordion = styled(MuiAccordion)(() => ({
    border: "none",
    boxShadow: "none",
    "&::before": {
        display: "none"
    }
}));
