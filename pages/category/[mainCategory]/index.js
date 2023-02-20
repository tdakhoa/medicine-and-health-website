import React from "react";
import Head from "next/head";
import Category from "../../../src/modules/Category/Category";
import { homeData } from "../../../src/constants";

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
    const paths = [];
    for (let i of homeData.slice(1, homeData.length - 1)) {
        paths.push({ params: { mainCategory: i.link.slice(i.link.lastIndexOf("/") + 1, i.link.length) } });
    }

    return {
        paths: paths,
        fallback: false
    };
}
