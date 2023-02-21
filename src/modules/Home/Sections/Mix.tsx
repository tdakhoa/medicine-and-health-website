import React from "react";
import { styled, Grid, Box, useMediaQuery, useTheme } from "@mui/material";

import AlternateCard from "./components/AlternateCard";
import SimpleCard from "./components/SimpleCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

interface SectionProps {
    title: string;
    link: string;
    data: any;
}

const MixSection = ({ title, link, data }: SectionProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Root>
            <Title text={title} link={link} />
            <CardContainer>
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
            </CardContainer>

            <SubCardGrid container rowSpacing={0} columnSpacing={2}>
                {cardData.map((data, i) =>
                    i !== 0 ? (
                        <Grid item xs={6} sm={3} key={i}>
                            <SimpleCard
                                img={data.img}
                                title={data.title}
                                content={data.content}
                                sx={StyleSimpleCard}
                                imgRatio={matches ? 6 : 4}
                                contentRatio={matches ? 6 : 8}
                                overlay={true}
                                borderRadius="10px 10px 0px 0px"
                            />
                        </Grid>
                    ) : (
                        <div key={i}></div>
                    )
                )}
            </SubCardGrid>
        </Root>
    );
};

export default MixSection;

const Root = styled("div")(({ theme }) => ({
    margin: "0% 10%",
    [theme.breakpoints.down("md")]: {
        margin: "0% 5%",
        paddingTop: "5%"
    }
}));

const StyleSimpleCard = {
    height: 300,
    textAlign: "center"
};

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

const SubCardGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        "& div:nth-of-type(3), div:nth-of-type(4)": {
            display: "none"
        }
    }
}));
