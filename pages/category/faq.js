import React from "react";
import Head from "next/head";
import FAQ from "../../src/modules/Category/FAQ";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <FAQ />
            </main>
        </div>
    );
}
