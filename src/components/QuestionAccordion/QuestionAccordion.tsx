import React, { useState } from "react";
import { styled, Accordion as MuiAccordion, AccordionSummary, AccordionDetails, List, Box } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

import Typography from "../Typography/Typography";

const QuestionAccordion = ({ data, ...props }: CategoryAccordionProps) => {
    const [trigger, setTrigger] = useState(false);

    const handleClick = (i: number) => {
        if (i === 2) setTrigger(!trigger);
    };

    return (
        <List>
            {data.map((item, index) => (
                <Box key={index}>
                    <Accordion disableGutters>
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreOutlined
                                    onClick={() => {
                                        handleClick(index);
                                    }}
                                />
                            }>
                            <Typography weight="bold">{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                    {index !== data.length - 1 ? <Divider /> : <></>}
                </Box>
            ))}
        </List>
    );
};

export default QuestionAccordion;

interface Data {
    title: string;
    description: string;
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

const Divider = styled(Box)(({ theme }) => ({
    borderTop: "1px solid rgba(23, 96, 118, 0.4)",
    margin: "0.7rem 0rem"
}));
