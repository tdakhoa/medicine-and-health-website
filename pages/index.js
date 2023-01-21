import React from 'react';
import Head from 'next/head';
import Home from '../src/modules/Home/Home';


export default function HomePage() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Home />
            </main>
        </div>
    );
}
