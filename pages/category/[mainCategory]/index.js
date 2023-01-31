import React from "react";
import Head from "next/head";
import Category from "../../../src/modules/Category/Category";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Category />
            </main>
        </div>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: params
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { mainCategory: "traditional-medicine" } },
            { params: { mainCategory: "medicine" } },
            { params: { mainCategory: "cardiovascular" } },
            { params: { mainCategory: "pathology" } },
            { params: { mainCategory: "pharmacy-information" } },
            { params: { mainCategory: "medical-law" } },
            { params: { mainCategory: "for-you" } }
        ],
        fallback: false
    };
}
