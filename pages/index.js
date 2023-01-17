import React from 'react';
import Head from 'next/head';

import { Navbar, Hero, Diseases, Heart, Medical, Meds, News } from '../components';

export default function Home() {
    return (
        <div>
            <Head>
                <title>THUỐC & SỨC KHỎE</title>
                <link rel="icon" href="/Logo.png" />
            </Head>

            <main>
                <Navbar />
                <Hero />
                <Diseases />
                <Heart />
                <Medical />
                <Meds />
                <News />
            </main>
        </div>
    );
}
