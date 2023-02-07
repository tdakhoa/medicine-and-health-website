import React from "react";
import { Box, Chip, styled } from "@mui/material";

import { Typography } from "../../../components";

const Tags = ({ data }: tagsProps) => {
    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    return (
        <Root>
            {data.map((item, i) => (
                <Chip sx={{ fontSize: "0.75rem" }} label={`#${item}`} variant="outlined" onClick={handleClick} />
            ))}
        </Root>
    );
};

export default Tags;

interface tagsProps {
    data: string[];
}

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "end",
    gap: "0.5rem",
    width: "100%"
}));
