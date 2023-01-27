import React from "react";
import Head from "next/head";
import Profile from "../../src/modules/Admin/Profile";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Profile />
            </main>
        </div>
    );
}
