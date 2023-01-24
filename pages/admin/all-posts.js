import React from "react";
import Head from "next/head";
import AllPosts from "../../src/modules/Admin/AllPosts";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>THUỐC & SỨC KHỎE</title>
        <link rel="icon" href="/Logo.png" />
      </Head>

      <main>
        <AllPosts />
      </main>
    </div>
  );
}
