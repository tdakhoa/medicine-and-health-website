import React from "react";
import { styled, Grid } from "@mui/material";

import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

const Root = styled("div")(({ theme }) => ({
    margin: "5% 10%"
}));

const NormalSection = () => {
    return (
        <Root>
            <Title text="Y HỌC CỔ TRUYỀN" link="/category/traditional-medicine" />
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
                <Grid item xs={4}>
                    <SimpleCard
                        img={cardData[0].img}
                        title={cardData[0].title}
                        content={cardData[0].content}
                        sx={{ height: 300 }}
                    />
                    <SimpleCard
                        img={cardData[1].img}
                        title={cardData[1].title}
                        content={cardData[0].content}
                        sx={{ height: 300 }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard
                        img={cardData[2].img}
                        imgRatio={9}
                        title={cardData[2].title}
                        content={cardData[0].content}
                        contentRatio={3}
                        overlay={false}
                        sx={{ height: 600 }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard
                        img={cardData[3].img}
                        title={cardData[3].title}
                        content={cardData[0].content}
                        sx={{ height: 300 }}
                    />
                    <SimpleCard
                        img={cardData[4].img}
                        title={cardData[4].title}
                        content={cardData[0].content}
                        sx={{ height: 300 }}
                    />
                </Grid>
            </Grid>
        </Root>
    );
};

export default NormalSection;
