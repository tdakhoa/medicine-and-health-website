import React from "react";
import { styled, Grid } from "@mui/material";

import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

interface SectionProps {
    title: string;
    link: string;
    data: any;
}

const NormalSection = ({ title, link, data }: SectionProps) => {
    return (
        <Root>
            <Title text={title} link={link} />
            <Grid container spacing={2} sx={{ textAlign: "center", flexDirection: { xs: "column", md: "row" } }}>
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, gap: "1rem" }}>
                    {cardData.slice(0, 2).map((item, i) => (
                        <SimpleCard
                            key={i}
                            img={item.img}
                            title={item.title}
                            content={item.content}
                            sx={{ height: 300 }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <SimpleCard
                        img={cardData[2].img}
                        imgRatio={9}
                        title={cardData[2].title}
                        content={cardData[0].content}
                        contentRatio={3}
                        overlay={false}
                        sx={{ height: { xs: 300, md: 600 } }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, gap: "1rem" }}>
                    {cardData.slice(3, 5).map((item, i) => (
                        <SimpleCard
                            key={i}
                            img={item.img}
                            title={item.title}
                            content={item.content}
                            sx={{ height: 300 }}
                        />
                    ))}
                </Grid>
            </Grid>
        </Root>
    );
};

export default NormalSection;

const Root = styled("div")(({ theme }) => ({
    margin: "5% 10%",
    [theme.breakpoints.down("md")]: {
        margin: "15% 5%"
    }
}));
