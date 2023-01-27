import React from "react";
import Head from "next/head";
import AllStaffs from "../../src/modules/Admin/AllStaffs";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <AllStaffs />
            </main>
        </div>
    );
}
