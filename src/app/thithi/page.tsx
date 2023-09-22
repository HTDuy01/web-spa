"use client";
import HomeHeader from "@/components/Home/home.header";
import Head from "next/head";

const BlogsPage = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  return (
    <h1>
      <Head>
        <link rel="shortcut icon" href="/src/static/fb.ico" />
      </Head>
      <HomeHeader />
    </h1>
  );
};

export default BlogsPage;
