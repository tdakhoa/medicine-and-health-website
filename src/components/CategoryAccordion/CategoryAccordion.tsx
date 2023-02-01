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
    const [trigger, setTrigger] = useState(false);

    const handleClick = (i: number) => {
        if (i === 2) setTrigger(!trigger);
    };

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
                            <LinkBox trigger={trigger} index={index}>
                                Link
                            </LinkBox>
                        </Link>
                        <Accordion disableGutters>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreOutlined
                                        onClick={() => {
                                            handleClick(index);
                                        }}
                                    />
                                }>
                                <Typography weight="bold">{item.title[0]}</Typography>
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

interface Data {
    title: string[];
    link: string[];
}

interface CategoryAccordionProps {
    data: Data[];
}

interface LinkBoxProps {
    trigger: boolean;
    index: number;
}

const Accordion = styled(MuiAccordion)(() => ({
    border: "none",
    boxShadow: "none",
    "&::before": {
        display: "none"
    }
}));

const LinkBox = styled(Box)<LinkBoxProps>(({ theme, trigger, index }) => ({
    position: "absolute",
    zIndex: "100000",
    left: "1rem",
    padding: "0.5rem 1.5rem",
    opacity: 0,
    top: index === 4 ? (trigger ? "20.3rem" : "12.8rem") : "6.8rem"
}));
