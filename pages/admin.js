import React from "react";
import Head from "next/head";
import Admin from "../src/modules/Admin/Admin";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>THUỐC & SỨC KHỎE</title>
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
        <Admin />
      </main>
    </div>
  );
}
