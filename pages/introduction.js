import React from "react";
import Head from "next/head";
import Introduction from "../src/modules/Introduction/Introduction";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>THUỐC & SỨC KHỎE</title>
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
        <Introduction />
      </main>
    </div>
  );
}
