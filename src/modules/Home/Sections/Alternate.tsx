import React from "react";
import { styled } from "@mui/material";

import AlternateCard from "./components/AlternateCard";
import Title from "./components/Title";
import { cardData } from "../../../constants";

const Root = styled("div")(({ theme }) => ({
    margin: "5% 10%"
}));
const AlternateSection = () => {
    return (
        <Root>
            <Title text="BỆNH HỌC" link="/category/pathology" />
            {cardData.map((data, id) => (
                <AlternateCard
                    key={id}
                    direction={id % 2 == 1 ? "row" : "row-reverse"}
                    sx={{
                        minHeight: 300,
                        marginBottom: "3rem"
                    }}
                    img={data.img}
                    title={data.title}
                    content={data.content}
                />
            ))}
        </Root>
    );
};

export default AlternateSection;
