import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../../src/modules/Admin/Profile"), { ssr: false });

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <DynamicComponentWithNoSSR />
            </main>
        </div>
    );
}
