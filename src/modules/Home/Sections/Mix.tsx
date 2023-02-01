import React from "react";
import { styled, Grid } from "@mui/material";

import AlternateCard from "./components/AlternateCard";
import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

const Mix = () => {
    return (
        <Root>
            <Title text="PHÁP LUẬT Y TẾ" link="/category/medical-law" />
            <AlternateCard
                direction="row"
                sx={{
                    minHeight: 300,
                    marginBottom: "3rem"
                }}
                img={cardData[0].img}
                title={cardData[0].title}
                content={cardData[0].content}
            />
            <Grid container rowSpacing={0} columnSpacing={2}>
                {cardData.map((data, i) =>
                    i !== 0 ? (
                        <Grid item xs={3} key={i}>
                            <SimpleCard
                                img={data.img}
                                title={data.title}
                                content={data.content}
                                sx={StyleSimpleCard}
                                imgRatio={4}
                                contentRatio={8}
                                overlay={true}
                                borderRadius="10px 10px 0px 0px"
                            />
                        </Grid>
                    ) : (
                        <div key={i}></div>
                    )
                )}
            </Grid>
        </Root>
    );
};

export default Mix;

const Root = styled("div")(({ theme }) => ({
    margin: "5% 10%"
}));

const StyleSimpleCard = {
    height: 400,
    textAlign: "center"
};
