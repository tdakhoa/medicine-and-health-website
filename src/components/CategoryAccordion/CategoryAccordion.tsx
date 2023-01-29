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

const LinkBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: "1rem",
    padding: "0.5rem 1.5rem",
    zIndex: "100000",
    opacity: 0
}));

const CategoryAccordion = ({ data, ...props }: CategoryAccordionProps) => {
    const [trigger, setTrigger] = useState(false);
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
                    <div key={index}>
                        <Link key={index} href={item.link[0]}>
                            <LinkBox sx={{ top: index === 4 ? (trigger ? "20.3rem" : "12.8rem") : "6.8rem" }}>
                                Link
                            </LinkBox>
                        </Link>
                        <Accordion disableGutters>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreOutlined
                                        onClick={
                                            index === 2
                                                ? () => {
                                                      setTrigger(!trigger);
                                                  }
                                                : () => {}
                                        }
                                    />
                                }>
                                <Typography sx={{ fontWeight: 700 }}>{item.title[0]}</Typography>
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
                    </div>
                )
            )}
        </List>
    );
};

export default CategoryAccordion;
