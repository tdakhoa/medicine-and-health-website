import React from "react";
import { styled, Box } from "@mui/material";

import AlternateCard from "./components/AlternateCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

interface SectionProps {
    title: string;
    link: string;
    data: any;
}

const AlternateSection = ({ title, link, data }: SectionProps) => {
    return (
        <Root>
            <Title text={title} link={link} />
            <CardContainer>
                {cardData.map((data, id) => (
                    <AlternateCard
                        key={id}
                        direction={id % 2 == 1 ? "row" : "row-reverse"}
                        sx={{}}
                        img={data.img}
                        title={data.title}
                        content={data.content}
                    />
                ))}
            </CardContainer>
        </Root>
    );
};

export default AlternateSection;

const Root = styled("div")(({ theme }) => ({
    margin: "0% 10%",
    [theme.breakpoints.down("md")]: {
        margin: "0% 5%"
    }
}));

const CardContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        overflowX: "scroll",
        position: "relative",
        zIndex: "10000",
        gap: "2rem",
        padding: "0.5rem",
        borderRadius: "30px 30px 0px 0px",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }
}));
