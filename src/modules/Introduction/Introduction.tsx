import React from "react";

import Layout from "../Layout";
import MainTitle from "../Category/components/MainTitle";
import Information from "./Sections/Information";
import Contact from "./Sections/Contact";

const Introduction = () => {
    return (
        <Layout>
            <MainTitle title="Giới thiệu" />
            <Information />
            <Contact />
        </Layout>
    );
};

export default Introduction;
