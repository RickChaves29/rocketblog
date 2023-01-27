import Head from "next/head";
import Image from "next/image";

import { Poppins, Roboto } from "@next/font/google";
import Post from "@/components/Post";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const poppins = Poppins({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Rocket Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionPosts}>
          <Post
            img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            date="Janeiro, 04/22"
            postTitle="Começando no ReactJS em 2022"
            postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
        error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
        dignissimos est id deserunt doloribus fugiat porro exercitationem."
          />
          <div className={styles.containerPostsColunm}>
            <Post
              date="Janeiro, 04/22"
              postTitle="Começando no ReactJS em 2022"
              postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
      error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
      dignissimos est id deserunt doloribus fugiat porro exercitationem."
            />
            <Post
              date="Janeiro, 04/22"
              postTitle="Começando no ReactJS em 2022"
              postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
      error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
      dignissimos est id deserunt doloribus fugiat porro exercitationem."
            />
          </div>
        </section>
        <section className={styles.sectionPosts}>
          <Post
            img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            date="Janeiro, 04/22"
            postTitle="Começando no ReactJS em 2022"
            postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
      error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
      dignissimos est id deserunt doloribus fugiat porro exercitationem."
          />
          <Post
            img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            date="Janeiro, 04/22"
            postTitle="Começando no ReactJS em 2022"
            postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
      error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
      dignissimos est id deserunt doloribus fugiat porro exercitationem."
          />
          <Post
            img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            date="Janeiro, 04/22"
            postTitle="Começando no ReactJS em 2022"
            postDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum
      error a aut sit illo et impedit alias enim asperiores dolore obcaecati,
      dignissimos est id deserunt doloribus fugiat porro exercitationem."
          />
        </section>
      </main>
    </>
  );
}
