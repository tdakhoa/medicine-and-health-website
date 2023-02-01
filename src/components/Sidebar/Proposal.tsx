import React from "react";
import { Box, styled } from "@mui/material";

import Typography from "../Typography/Typography";
import Carousel from "../Carousel/Carousel";
import SimpleCard from "../../modules/Home/Sections/components/SimpleCard";
import { cardData } from "../../constants";

const Proposal = () => {
    return (
        <Root>
            <Typography size="h5" weight="bold" color="secondary" format="center" transform="uppercase" sx={{ mb: 2 }}>
                Đề xuất
            </Typography>
            <Carousel listData={dataList} indicators={false} animation="slide" />
        </Root>
    );
};

export default Proposal;

const dataList = cardData.map((item, i) => (
    <div key={i}>
        <SimpleCard
            img={item.img}
            title={item.title}
            content={item.content}
            borderRadius="10px 10px 0px 0px"
            imgRatio={8}
            contentRatio={4}
            sx={{ height: 310 }}
        />
    </div>
));

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    border: "0.5px solid rgba(23, 96, 118, 0.4)",
    borderRadius: "10px",
    padding: "1.5rem"
}));
