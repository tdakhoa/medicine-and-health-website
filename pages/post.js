import React from "react";
import Head from "next/head";
import PostPage from "../src/modules/Posts/PostPage";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <PostPage />
            </main>
        </div>
    );
}
