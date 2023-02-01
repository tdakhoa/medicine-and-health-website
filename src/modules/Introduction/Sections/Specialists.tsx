import React from "react";
import { styled, Box, CardMedia, Grid } from "@mui/material";

import Title from "../../Home/Sections/components/Title";

const Contact = () => {
    return (
        <Root>
            <Title
                sx={{
                    "& .see-more": {
                        display: "none"
                    }
                }}
                text="Đội ngũ chuyên gia"
            />

            <Grid container spacing={4}>
                {ImageData.map((item, i) => (
                    <Grid key={i} item xs={4}>
                        <CardMedia
                            sx={{
                                minHeight: 400
                            }}
                            className="overlay"
                            component="img"
                            image={item.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Root>
    );
};

export default Contact;

const ImageData = [
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        name: "Ngan Lam",
        postion: "Doctor",
        description: "Lorem ispum"
    }
];

const Root = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "5% 10%",
    gap: "7%",
    justifyContent: "space-between"
}));
