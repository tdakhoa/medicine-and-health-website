import React from "react";
import Head from "next/head";

import { links } from "../../../../src/constants";
import Category from "../../../../src/modules/Category/Category";

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

// export async function getStaticProps({ params }) {
//   return {
//     props: params,
//   };
// }

// export async function getStaticPaths() {
//     return {
//         paths: links.map((link) => {
//             return {
//                 params: {
//                     mainCategory: link.mainCategory,
//                     subCategory: link.subCategory
//                 }
//             };
//         }),

//         fallback: false
//     };
// }
