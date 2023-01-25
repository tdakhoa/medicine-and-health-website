import React from "react";
import Head from "next/head";
import Category from "../../src/modules/Category/Category";

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
