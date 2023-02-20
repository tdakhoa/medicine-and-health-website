import React from "react";
import Head from "next/head";

import { homeData } from "../../../../src/constants";
import Category from "../../../../src/modules/Category/Category";

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
    for (let i of homeData.slice(1, homeData.length - 1))
        for (let j of i.item) {
            paths.push({
                params: {
                    mainCategory: i.link.slice(i.link.lastIndexOf("/") + 1, i.link.length),
                    subCategory: j.link.slice(j.link.lastIndexOf("/") + 1, j.link.length)
                }
            });
        }

    return {
        paths: paths,
        fallback: false
    };
}
