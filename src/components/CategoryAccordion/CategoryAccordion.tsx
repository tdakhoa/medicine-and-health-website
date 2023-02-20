import React, { useState } from "react";
import Link from "next/link";
import {
    styled,
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItemButton,
    ListItemText
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

import Typography from "../Typography/Typography";

const CategoryAccordion = ({ data, ...props }: CategoryAccordionProps) => {
    return (
        <List>
            {data.map((e, index) =>
                e?.item?.length == 0 ? (
                    <Link key={index} href={e.link}>
                        <ListItemButton>
                            <ListItemText primary={e.title} sx={{ "& .MuiTypography-root": { fontWeight: 700 } }} />
                        </ListItemButton>
                    </Link>
                ) : (
                    <Accordion key={index} disableGutters>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            <Link href={e.link}>
                                <Typography weight="bold">{e.title}</Typography>
                            </Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            {e.item?.map((e, i) => (
                                <Link key={i} href={e.link}>
                                    <ListItemButton>
                                        <ListItemText primary={e.title} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </List>
    );
};

export default CategoryAccordion;

interface Data {
    title: string;
    link: string;
    item?: Data[];
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
